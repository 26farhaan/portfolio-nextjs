import { ReactNode } from "react";
import { Metadata } from "next";
import { Container, Grid, GridCol } from "@mantine/core";

import Sidebar from "@/components/Layouts/Sidebar";
import classes from "./layout.module.css";

export const metadata: Metadata = {
  title: "Mohamad Farhan",
  description: "Mohamad Farhan Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className={classes.root}>
      <Container size="lg" className={classes.container}>
        <Grid>
          <GridCol span={{ md: 3 }} className={classes.sidebarWrapper}>
            <Sidebar />
          </GridCol>
          <GridCol span={{ md: 9 }} p="md" pb={100} className={classes.contentWrapper}>
            {children}
          </GridCol>
        </Grid>
      </Container>
    </main>
  );
}
