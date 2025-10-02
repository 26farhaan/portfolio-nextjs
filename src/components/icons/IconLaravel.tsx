import { SVGProps } from "react";

type IconLaravelProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconLaravel = (props: IconLaravelProps) => {
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
      <path d="m3 17 8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zm8 1v4m-4-6.5 7-4m0-4v4m0 0 4 2.5" />
      <path d="M11 13V5.5L7 3 3 5.5M7 8l4-2.5m7 4.5 4-2.5" />
    </svg>
  );
};

export default IconLaravel;
