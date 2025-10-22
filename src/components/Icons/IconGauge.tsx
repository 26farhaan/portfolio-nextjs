import { SVGProps } from "react";

type IconGaugeProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconGauge = (props: IconGaugeProps) => {
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5" />
    </svg>
  );
};

export default IconGauge;
