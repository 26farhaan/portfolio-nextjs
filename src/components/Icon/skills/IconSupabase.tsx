import { SVGProps } from "react";

type IconSupabaseProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconSupabase = (props: IconSupabaseProps) => {
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
      <path d="M4 14h8v7l8-11h-8V3z" />
    </svg>
  );
};

export default IconSupabase;
