import { Avatar, Box, Divider, Flex, Text } from "@mantine/core";

import LangSwitch from "../LangSwitch";
import Sidenav from "../Sidenav";
import ThemeSwitch from "../ThemeSwitch";
import classes from "./index.module.css";

export default function Sidebar() {
  return (
    <Box pos="sticky" top={0} p="md" className={classes.rootSidebar}>
      <Flex align="center" direction="column">
        <Avatar alt="Mohamad Farhan Profile" variant="filled" size={140} src="/images/profile-1.jpg" />
        <Text fz={24} mt={12} fw={500}>
          Mohamad Farhan
        </Text>
        <Text fz="sm" className={classes.usename}>
          @26farhaan
        </Text>
      </Flex>
      <Flex mt="sm" align="center" justify="center" gap="md">
        <ThemeSwitch />
        <LangSwitch />
      </Flex>
      <Divider my="md" />
      <Sidenav />
    </Box>
  );
}
