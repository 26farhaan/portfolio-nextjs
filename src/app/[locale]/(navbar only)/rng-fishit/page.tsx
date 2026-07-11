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

/* =======================
   Utils
======================= */

function parseDenom(x: string | number) {
  if (typeof x === "number") return x;
  const s = String(x).trim().toLowerCase();
  if (s.endsWith("m")) return Number(s.slice(0, -1)) * 1_000_000;
  if (s.endsWith("k")) return Number(s.slice(0, -1)) * 1_000;
  return Number(s);
}

function finalChance(denom: string | number, luckPercent: number) {
  const p = 1 / parseDenom(denom); // base chance
  const m = 1 + luckPercent / 100; // luck multiplier
  return Math.min(1, p * m); // clamp max 100%
}

/* =======================
   Types & Data
======================= */

type Rarity = "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythic" | "Secret";

const rarityOrder: Record<Rarity, number> = {
  Uncommon: 1,
  Rare: 2,
  Epic: 3,
  Legendary: 4,
  Mythic: 5,
  Secret: 6,
};

const fishes: {
  name: string;
  denom: string | number;
  rarity: Rarity;
}[] = [
  { name: "Secret 1 (1/2m)", denom: "2m", rarity: "Secret" },
  { name: "Secret 2 (1/4m)", denom: "4m", rarity: "Secret" },

  { name: "Mythic (1/50k)", denom: "50k", rarity: "Mythic" },

  { name: "Legendary 1 (1/5k)", denom: "5k", rarity: "Legendary" },
  { name: "Legendary 2 (1/5k)", denom: "5k", rarity: "Legendary" },
  { name: "Legendary 3 (1/45k)", denom: "45k", rarity: "Legendary" },

  { name: "Epic 1 (1/1k)", denom: "1k", rarity: "Epic" },
  { name: "Epic 2 (1/1k)", denom: "1k", rarity: "Epic" },
  { name: "Epic 3 (1/3k)", denom: "3k", rarity: "Epic" },

  { name: "Rare 1 (1/300)", denom: 300, rarity: "Rare" },
  { name: "Rare 2 (1/300)", denom: 300, rarity: "Rare" },
  { name: "Rare 3 (1/300)", denom: 300, rarity: "Rare" },
  { name: "Rare 4 (1/300)", denom: 300, rarity: "Rare" },
  { name: "Rare 5 (1/300)", denom: 300, rarity: "Rare" },

  { name: "Uncommon", denom: 50, rarity: "Uncommon" },
];

/* =======================
   RNG Logic
======================= */

// Roll 1 ikan (cek dari paling langka → paling umum)
function rollFishByRarity(items: { name: string; denom: string | number }[], luckPercent: number, rng = Math.random) {
  const sorted = [...items].sort((a, b) => parseDenom(b.denom) - parseDenom(a.denom));

  for (const it of sorted) {
    const chance = finalChance(it.denom, luckPercent);
    if (rng() < chance) return it.name;
  }

  // fallback ke ikan termudah
  return sorted[sorted.length - 1].name;
}

function multiRollWithSorting(
  items: { name: string; denom: string | number; rarity: Rarity }[],
  luckPercent: number,
  times: number
) {
  const counter: Record<string, number> = {};

  for (const it of items) counter[it.name] = 0;

  for (let i = 0; i < times; i++) {
    const result = rollFishByRarity(items, luckPercent);
    counter[result]++;
  }

  return items
    .map((it) => ({
      name: it.name,
      denom: it.denom,
      rarity: it.rarity,
      count: counter[it.name],
    }))
    .sort((a, b) => {
      const rDiff = rarityOrder[b.rarity] - rarityOrder[a.rarity];
      if (rDiff !== 0) return rDiff;

      return parseDenom(a.denom) - parseDenom(b.denom);
    });
}

/* =======================
   Component
======================= */

export default function RNGFishItPage() {
  const [result, setResult] = useState<{ name: string; denom: string | number; rarity: Rarity; count: number }[]>([]);
  const [bonusLuck, setBonusLuck] = useState<number>(0);
  const [levelLuck, setLevelLuck] = useState<number>(0);
  const [sumRoll, setSumRoll] = useState<number>(0);

  const run = (roll: number) => {
    setSumRoll((prev) => prev + roll);
    const r = multiRollWithSorting(fishes, Number(bonusLuck + levelLuck), roll);
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
                  label="Bonus Luck"
                  placeholder="Masukan bonus luck"
                  onChange={(val) => setBonusLuck(+val || 0)}
                />

                <NumberInput
                  label="Level Luck"
                  placeholder="Masukan level luck"
                  onChange={(val) => setLevelLuck(+val || 0)}
                />

                <Button onClick={() => run(300)}>Roll 300x</Button>
                <Button onClick={() => run(1_000)}>Roll 1.000x</Button>
                <Button onClick={() => run(10_000)}>Roll 10.000x</Button>
                <Button onClick={() => run(100_000)}>Roll 100.000x</Button>
                <Button onClick={() => run(1_000_000)}>Roll 1.000.000x</Button>
              </Group>

              <Box mt={16}>
                Total Roll: <b>{sumRoll.toLocaleString()}</b>
              </Box>
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
                      <TableTd>{it.name}</TableTd>
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
