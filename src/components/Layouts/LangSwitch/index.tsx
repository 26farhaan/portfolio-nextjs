"use client";

import { useRouter } from "next/navigation";
import { Switch, Text } from "@mantine/core";
import { useLocale } from "next-intl";

export default function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();

  return (
    <Switch
      checked={locale === "id"}
      onChange={(e) => {
        const newLocale = e.currentTarget.checked ? "id" : "en";
        router.push(`/${newLocale}`);
      }}
      size="lg"
      color="blue.6"
      onLabel={
        <Text fz="xs" fw={700}>
          ID
        </Text>
      }
      offLabel={
        <Text fz="xs" fw={700}>
          US
        </Text>
      }
      thumbIcon={
        locale !== "id" ? (
          <Text fz="xs" fw={700}>
            ID
          </Text>
        ) : (
          <Text fz="xs" fw={700} c="gray">
            US
          </Text>
        )
      }
    />
  );
}
