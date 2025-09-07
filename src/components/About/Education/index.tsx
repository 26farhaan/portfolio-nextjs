import { useTranslations } from "next-intl";

import IconEducation from "@/components/Icons/IconEducation";
import HeaderSection from "@/components/UI/HeaderSection";
import classes from "./index.module.css";

export default function Education() {
  const t = useTranslations("About.education");

  return (
    <section>
      <HeaderSection
        flexOptions={{ align: "start" }}
        leftSection={<IconEducation size={20} />}
        title={t("title")}
        description={t("description")}
      />
    </section>
  );
}
