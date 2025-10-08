import { Box, Flex, Group, GroupProps, Text } from "@mantine/core";

import classes from "./index.module.css";

type HeaderSectionProps = {
  title: string;
  description: string;
  leftSection?: React.ReactNode;
  groupOptions?: GroupProps;
  c?: string;
};

export default function HeaderSection({ title, description, leftSection, groupOptions, c }: HeaderSectionProps) {
  const { align = "center", gap = "sm" } = groupOptions || {};
  return (
    <Box>
      <Group align={align} gap={gap} c={c}>
        {leftSection}
        <Text>{title}</Text>
      </Group>
      <Text size="xs" className={classes.caption} c={c}>
        {description}
      </Text>
    </Box>
  );
}
