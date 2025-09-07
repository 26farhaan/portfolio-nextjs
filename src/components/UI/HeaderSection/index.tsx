import { Box, Flex, FlexProps, Text } from "@mantine/core";

import classes from "./index.module.css";

type HeaderSectionProps = {
  title: string;
  description: string;
  leftSection?: React.ReactNode;
  flexOptions?: FlexProps;
};

export default function HeaderSection({ title, description, leftSection, flexOptions }: HeaderSectionProps) {
  const { align = "center", gap = "sm" } = flexOptions || {};
  return (
    <Box>
      <Flex align={align} gap={gap}>
        {leftSection}
        <Text>{title}</Text>
      </Flex>
      <Text size="xs" className={classes.caption}>
        {description}
      </Text>
    </Box>
  );
}
