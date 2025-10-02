import { SVGProps } from "react";

type IconArrowRightProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconArrowRight = (props: IconArrowRightProps) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );
};

export default IconArrowRight;
