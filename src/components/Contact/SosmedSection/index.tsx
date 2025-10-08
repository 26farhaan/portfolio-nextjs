import { Anchor, Box, Button, Grid, GridCol } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import IconGmail from "@/components/Icons/IconGmail";
import IconInstagram from "@/components/Icons/IconInstagram";
import IconLinkedin from "@/components/Icons/IconLinkedin";
import IconTiktok from "@/components/Icons/IconTiktok";
import IconGithub from "@/components/Icons/skills/IconGithub";
import HeaderSection from "@/components/UI/HeaderSection";
import classes from "./index.module.css";

type SosmedCardProps = {
  sosmed: "gmail" | "linkedin" | "github" | "instagram" | "tiktok";
  icon: React.ReactNode;
  background: React.ReactNode;
  link: string;
  title: string;
  description: string;
};
const SosmedCard = ({ sosmed, icon, background, link, title, description }: SosmedCardProps) => {
  return (
    <Grid className={`${classes.card} ${classes[sosmed]}`}>
      <GridCol span={8}>
        <Box className={classes.background}>{background}</Box>
        <div className={classes.content}>
          <HeaderSection c="white" title={title} description={description} />
          <Anchor href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" c="white" radius="md" size="xs" mt="md">
              Go To {String(sosmed).charAt(0).toUpperCase() + String(sosmed).slice(1)}
            </Button>
          </Anchor>
        </div>
      </GridCol>
      <GridCol span={4}>
        <Box className={classes.iconWrapper}>{icon}</Box>
      </GridCol>
    </Grid>
  );
};

export default async function SosmedSection() {
  const t = await getTranslations("Contact");
  return (
    <section>
      <Grid>
        <GridCol span={12}>
          <SosmedCard
            title={t("gmail.title")}
            description={t("gmail.description")}
            link="mailto:farhan.21144@gmail.com"
            background={<IconGmail size={240} />}
            icon={<IconGmail size={32} />}
            sosmed="gmail"
          />
        </GridCol>
        <GridCol span={{ md: 6 }}>
          <SosmedCard
            title={t("tiktok.title")}
            description={t("tiktok.description")}
            link="https://www.tiktok.com/@26farhaan"
            background={<IconTiktok size={240} />}
            icon={<IconTiktok size={32} />}
            sosmed="tiktok"
          />
        </GridCol>
        <GridCol span={{ md: 6 }}>
          <SosmedCard
            title={t("github.title")}
            description={t("github.description")}
            link="https://github.com/26farhaan"
            background={<IconGithub size={240} />}
            icon={<IconGithub size={32} />}
            sosmed="github"
          />
        </GridCol>
        <GridCol span={{ md: 6 }}>
          <SosmedCard
            title={t("linkedin.title")}
            description={t("linkedin.description")}
            link="www.linkedin.com/in/mohamad-farhan-7b1a6b194"
            background={<IconLinkedin size={240} />}
            icon={<IconLinkedin size={32} />}
            sosmed="linkedin"
          />
        </GridCol>
        <GridCol span={{ md: 6 }}>
          <SosmedCard
            title={t("instagram.title")}
            description={t("instagram.description")}
            link="https://www.instagram.com/26farhaan"
            background={<IconInstagram size={240} />}
            icon={<IconInstagram size={32} />}
            sosmed="instagram"
          />
        </GridCol>
      </Grid>
    </section>
  );
}
