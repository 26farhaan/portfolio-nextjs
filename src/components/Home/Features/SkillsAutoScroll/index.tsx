import { Badge } from "@mantine/core";

import { SKILLS } from "@/constants/skills";
import classes from "./index.module.css";

type SkillsAutoScrollProps = {
  toRight?: boolean;
};

export default function SkillsAutoScroll({ toRight = false }: SkillsAutoScrollProps) {
  return (
    <div className={classes.marquee}>
      <div className={toRight ? classes.trackRight : classes.track}>
        {SKILLS.map((skill, i) => (
          <div key={i} className={classes.item}>
            <Badge leftSection={skill.icon({ size: 20 })} size="xl" variant="light" c={skill.color} color={skill.color}>
              {skill.label}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
