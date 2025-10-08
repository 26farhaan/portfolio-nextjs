import { Anchor, Grid, GridCol } from "@mantine/core";

import Achivement from "./Achivement";

export default function ListAchievement() {
  return (
    <Grid>
      <GridCol span={{ md: 4 }}>
        <Anchor
          underline="never"
          target="_blank"
          href="https://drive.google.com/file/d/1FBCQEesXs57H9V2EBdwjB9o1Iq7Zw45q/view"
        >
          <Achivement />
        </Anchor>
      </GridCol>
    </Grid>
  );
}
