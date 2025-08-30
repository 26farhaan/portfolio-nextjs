"use client";

import { usePathname, useRouter } from "next/navigation";
import { Switch, Text } from "@mantine/core";
import { useLocale } from "next-intl";

export default function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log();

  const handleSwitch = () => {
    const currentPath = pathname.split("/")[2];
    const newLocale = locale === "id" ? "en" : "id";
    router.push(`/${newLocale}/${currentPath || ""}`);
  };

  return (
    <Switch
      checked={locale === "id"}
      onChange={handleSwitch}
      size="lg"
      color="gray"
      offLabel={
        <Text fz="xs" fw={700}>
          ID
        </Text>
      }
      onLabel={
        <Text fz="xs" fw={700}>
          US
        </Text>
      }
      thumbIcon={
        locale === "id" ? (
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
