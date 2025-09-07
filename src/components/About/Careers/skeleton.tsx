"use client";

import { Box, Flex, Skeleton } from "@mantine/core";

export default function CareersSkeleton() {
  return (
    <>
      <Box my="lg">
        <Skeleton height={20} />
        <Skeleton height={20} mt="sm" />
      </Box>
      <Flex direction="column" gap="md" mb="md">
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
      </Flex>
    </>
  );
}
