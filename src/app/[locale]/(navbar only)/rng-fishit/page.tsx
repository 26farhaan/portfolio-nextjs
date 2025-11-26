"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  NumberInput,
  Paper,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";

function parseDenom(x: string | number) {
  if (typeof x === "number") return x;
  const s = String(x).trim().toLowerCase();
  if (s.endsWith("m")) return Number(s.slice(0, -1)) * 1_000_000;
  if (s.endsWith("k")) return Number(s.slice(0, -1)) * 1_000;
  return Number(s);
}

function finalChance(denom: string | number, luckPercent: number) {
  const p = 1 / parseDenom(denom); // base chance = 1 / denom
  const m = 1 + luckPercent / 100; // luckPercent dalam %, misal 1944 = 19.44x
  return Math.min(1, p * m); // clamp ke max 100%
}

// Roll satu ikan, dicek dari paling langka → paling umum.
// Kalau semua gagal, fallback ke ikan dengan denom paling rendah (paling mudah).
function rollFishByRarity(items: { name: string; denom: string | number }[], luckPercent: number, rng = Math.random) {
  // sort: denom besar → kecil (4m → 2m → 50k → 5k → 45k → dst)
  const sorted = [...items].sort((a, b) => parseDenom(b.denom) - parseDenom(a.denom));

  for (const it of sorted) {
    const chance = finalChance(it.denom, luckPercent);
    const roll = rng();
    if (roll < chance) return it.name;
  }

  // semua gagal → paksa dapat ikan dengan denom paling kecil (paling umum)
  const lowestDenomFish = sorted[sorted.length - 1];
  return lowestDenomFish.name;
}

function getRarity(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("secret")) return "Secret";
  if (lower.includes("mythic")) return "Mythic";
  if (lower.includes("legendary")) return "Legendary";
  if (lower.includes("epic")) return "Epic";
  if (lower.includes("rare")) return "Rare";
  return "Uncommon";
}

const rarityOrder: Record<string, number> = {
  Uncommon: 1,
  Rare: 2,
  Epic: 3,
  Legendary: 4,
  Mythic: 5,
  Secret: 6,
};

function multiRollWithSorting(items: { name: string; denom: string | number }[], luckPercent: number, times: number) {
  const counter: Record<string, number> = {};

  // init semua ikan → 0
  for (const it of items) {
    counter[it.name] = 0;
  }

  // do rolls
  for (let i = 0; i < times; i++) {
    const result = rollFishByRarity(items, luckPercent);
    console.log(`Roll ${i + 1}: ${result}`);
    if (counter[result] !== undefined) {
      counter[result]++;
    }
  }

  // convert ke array + sorting berdasarkan rarity dan denom
  const resultArray = items
    .map((it) => ({
      name: it.name,
      denom: it.denom,
      count: counter[it.name],
      rarity: getRarity(it.name),
    }))
    .sort((a, b) => {
      const r1 = rarityOrder[a.rarity];
      const r2 = rarityOrder[b.rarity];
      if (r1 !== r2) return r2 - r1; // sort berdasarkan tier rarity
      return parseDenom(a.denom) - parseDenom(b.denom); // rarity sama → denom kecil ke besar
    });

  return resultArray;
}

const fishes = [
  { name: "Secret 1 (1/2m)", denom: "2m" },
  { name: "Secret 2 (1/4m)", denom: "4m" },
  { name: "Mythic (1/50k)", denom: "50k" },
  { name: "Legendary 1 (1/5k)", denom: "5k" },
  { name: "Legendary 2 (1/5k)", denom: "5k" },
  { name: "Legendary 3 (1/45k)", denom: "45k" },
  { name: "Epic 1 (1/1k)", denom: "1k" },
  { name: "Epic 2 (1/1k)", denom: "1k" },
  { name: "Epic 3 (1/3k)", denom: "3k" },
  { name: "Rare 1 (1/300)", denom: 300 },
  { name: "Rare 2 (1/300)", denom: 300 },
  { name: "Rare 3 (1/300)", denom: 300 },
  { name: "Rare 4 (1/300)", denom: 300 },
  { name: "Rare 5 (1/300)", denom: 300 },
  { name: "Uncommon 1 (1/50)", denom: 50 },
  { name: "Uncommon 2 (1/50)", denom: 50 },
  { name: "Uncommon 3 (1/50)", denom: 50 },
  { name: "Uncommon 4 (1/50)", denom: 50 },
  { name: "Uncommon 5 (1/50)", denom: 50 },
  { name: "Uncommon 6 (1/100)", denom: 100 },
  { name: "Uncommon 7 (1/100)", denom: 150 },
];

export default function RNGFishItPage() {
  const [result, setResult] = useState<any[]>([]);
  const [bonusLuck, setBonusLuck] = useState<string | number>(0);
  const [levelLuck, setLevelLuck] = useState<string | number>(0);
  const [sumRoll, setSumRoll] = useState<number>(0);

  const run = (roll: number) => {
    setSumRoll((bef) => bef + roll);
    const r = multiRollWithSorting(fishes, Number(bonusLuck), roll);
    setResult(r);
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <Box>
        <Paper withBorder shadow="sm" p="md">
          <Grid>
            <GridCol span={4}>
              <Group align="end" gap="md">
                <NumberInput
                  thousandSeparator
                  onChange={(val) => setBonusLuck(val || 0)}
                  label="Bonus Luck"
                  placeholder="masukan bonus luck"
                  maxLength={12}
                />
                <NumberInput
                  onChange={(val) => setLevelLuck(val || 0)}
                  label="Level Luck"
                  placeholder="masukan level luck"
                />
                <Button onClick={() => run(300)}>Roll 300x</Button>
                <Button onClick={() => run(1000)}>Roll 1000x</Button>
                <Button onClick={() => run(10000)}>Roll 10.000x</Button>
                <Button onClick={() => run(100000)}>Roll 100.000x</Button>
                <Button onClick={() => run(1000000)}>Roll 1.000.000x</Button>
              </Group>
              <Box mt={16}>Total Roll: {sumRoll.toLocaleString()}</Box>
            </GridCol>
            <GridCol span={8}>
              <Table>
                <TableThead>
                  <TableTr>
                    <TableTh>Ikan</TableTh>
                    <TableTh>Denom</TableTh>
                    <TableTh>Rarity</TableTh>
                    <TableTh>Jumlah Diperoleh</TableTh>
                  </TableTr>
                </TableThead>
                <TableTbody>
                  {result.map((it, idx) => (
                    <TableTr key={idx}>
                      <TableTd c="red">{it.name}</TableTd>
                      <TableTd>{it.denom}</TableTd>
                      <TableTd>{it.rarity}</TableTd>
                      <TableTd>{it.count}</TableTd>
                    </TableTr>
                  ))}
                </TableTbody>
              </Table>
            </GridCol>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
