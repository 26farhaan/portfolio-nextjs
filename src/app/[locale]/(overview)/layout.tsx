import { ReactNode } from "react";
import { Container, Grid, GridCol } from "@mantine/core";

import Sidebar from "@/components/Layouts/Sidebar";
import classes from "./layout.module.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className={classes.root}>
      <Container size="xl" className={classes.container} pb={100}>
        <Grid>
          <GridCol span={{ md: 3 }} className={classes.sidebarWrapper}>
            <Sidebar />
          </GridCol>
          <GridCol span={{ md: 9 }} p="md">
            {children}
          </GridCol>
        </Grid>
      </Container>
    </main>
  );
}
