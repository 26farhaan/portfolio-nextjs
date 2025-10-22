import { SVGProps } from "react";

type IconClockProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconClock = (props: IconClockProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9 0 2 3m-2-8v5" />
    </svg>
  );
};

export default IconClock;
