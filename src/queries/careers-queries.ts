// lib/careers.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { DecodedValueMap, StringParam } from "use-query-params";

import LISTCAREER, { LISTCAREERType } from "@/constants/list-career";

export type Career = {
  id: number;
  company: string;
  role: string;
  period: string;
};

export const projectParams = {};

type UseCareersParams = DecodedValueMap<typeof projectParams>;

export const useListCareersQuery = (options?: { queryParams?: Partial<UseCareersParams>; enabled?: boolean }) => {
  const { queryParams = {}, enabled = true } = options ?? {};

  const query = useQuery({
    queryKey: ["careers", queryParams],
    queryFn: async () => LISTCAREER,
    enabled,
  });

  return query;
};
