"use client";

import { useEffect, useState } from "react";

export default function QuranPage() {
  const [ayat, setAyat] = useState([]);

  const getDataQuran = async () => {
    try {
      const response = await fetch("https://equran.id/api/v2/surat/114");
      const data = await response.json();
      console.log("Quran Data:", data);
      setAyat(data.data.ayat);
    } catch (error) {
      console.error("Error fetching Quran data:", error);
    }
  };

  useEffect(() => {
    getDataQuran();
  }, []);

  console.log(ayat);
  return (
    <div>
      <ul>
        {ayat &&
          ayat.map((a: any) => (
            <li key={a.nomorAyat}>
              {a.nomorAyat}. {a.teksArab}
              <div>{a.teksLatin}</div>
              <div>{a.teksIndonesia}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
