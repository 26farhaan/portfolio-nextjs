"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Group, Loader, Select, TextInput } from "@mantine/core";
import { debounce } from "lodash";
import { useTranslations } from "next-intl";

import IconSearch from "@/components/Icon/IconSearch";
import { useListCareersQuery } from "@/queries/careers-queries";

export default function FilterProjects() {
  const t = useTranslations("Projects");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const qSearch = searchParams.get("search") || "";
  const qCompanyCode = searchParams.get("company_code") || "";

  const { data, isLoading, isPending } = useListCareersQuery();

  const listCompany = data?.map((x) => ({ value: x.code, label: x.company })) || [];

  const debouncedUpdateSearch = useCallback(
    debounce((e) => {
      const search = e.target.value;
      if (!search) {
        const sp = new URLSearchParams(searchParams);
        sp.delete("search");
        router.push(`${pathname}?${sp.toString()}`);
        return;
      }
      const sp = new URLSearchParams(searchParams);
      sp.set("search", search);
      router.push(`${pathname}?${sp.toString()}`);
    }, 600),
    []
  );

  const handleSelectCompany = (value: string | null) => {
    if (!value) {
      const sp = new URLSearchParams(searchParams);
      sp.delete("company_code");
      router.push(`${pathname}?${sp.toString()}`);
      return;
    }
    const sp = new URLSearchParams(searchParams);
    sp.set("company_code", value);
    router.push(`${pathname}?${sp.toString()}`);
  };

  return (
    <Group gap="xs" justify="flex-end">
      <TextInput
        defaultValue={qSearch}
        onChange={debouncedUpdateSearch}
        // label="Search"
        leftSection={<IconSearch size={14} />}
        placeholder={t("search")}
        size="xs"
      />
      <Select
        disabled={isLoading || isPending}
        rightSection={isLoading || isPending ? <Loader size={14} /> : null}
        value={qCompanyCode}
        // label="Company"
        placeholder={t("company")}
        size="xs"
        data={[{ value: "own", label: t("ownProjects") }, ...listCompany]}
        clearable
        onChange={handleSelectCompany}
      />
    </Group>
  );
}
