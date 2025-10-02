import { Box, Flex, Group, GroupProps, Text } from "@mantine/core";

import classes from "./index.module.css";

type HeaderSectionProps = {
  title: string;
  description: string;
  leftSection?: React.ReactNode;
  groupOptions?: GroupProps;
};

export default function HeaderSection({ title, description, leftSection, groupOptions }: HeaderSectionProps) {
  const { align = "center", gap = "sm" } = groupOptions || {};
  return (
    <Box>
      <Group align={align} gap={gap}>
        {leftSection}
        <Text>{title}</Text>
      </Group>
      <Text size="xs" className={classes.caption}>
        {description}
      </Text>
    </Box>
  );
}
