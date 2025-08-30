import { SVGProps } from "react";

type IconFrammerMotionProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconFrammerMotion = (props: IconFrammerMotionProps) => {
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
      <path d="M12 12 4 4v16L20 4v16l-4-4" />
      <path d="m20 12-8 8-4-4" />
    </svg>
  );
};

export default IconFrammerMotion;
