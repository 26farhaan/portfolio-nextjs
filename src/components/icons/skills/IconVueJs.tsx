import { SVGProps } from "react";

type IconVueJsProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconVueJs = (props: IconVueJsProps) => {
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
      <path d="M16.5 4 12 12 7.5 4" />
      <path d="m3 4 9 16 9-16" />
    </svg>
  );
};

export default IconVueJs;
