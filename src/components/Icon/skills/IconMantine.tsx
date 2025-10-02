import { SVGProps } from "react";

type IconMantineProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconMantine = (props: IconMantineProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
      <path d="M11 16a4.97 4.97 0 0 0 2-4 5.01 5.01 0 0 0-2-4m3 1h-2m2 6h-2m-2-3h.01" />
    </svg>
  );
};

export default IconMantine;
