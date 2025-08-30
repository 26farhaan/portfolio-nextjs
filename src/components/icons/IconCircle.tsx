import { SVGProps } from "react";

type IconCircleProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconCircle = (props: IconCircleProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3.34a10 10 0 1 1-4.995 8.984L2 12l.005-.324A10 10 0 0 1 7 3.34" />
    </svg>
  );
};

export default IconCircle;
