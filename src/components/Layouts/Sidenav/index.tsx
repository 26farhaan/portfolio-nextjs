import { Flex, NavLink } from "@mantine/core";

import IconHome from "@/components/icons/IconHome";

export default function Sidenav() {
  return (
    <Flex direction="column">
      <NavLink href="/about" label="Home" leftSection={<IconHome size={20} />} />
      <NavLink href="#required-for-focus" label="About" leftSection={<IconHome size={20} />} />
      <NavLink href="#required-for-focus" label="Achivements" leftSection={<IconHome size={20} />} />
      <NavLink href="#required-for-focus" label="Projects" leftSection={<IconHome size={20} />} />
      <NavLink href="#required-for-focus" label="Dashboard" leftSection={<IconHome size={20} />} />
      <NavLink href="#required-for-focus" label="Feature" leftSection={<IconHome size={20} />} />
      <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </Flex>
  );
}
