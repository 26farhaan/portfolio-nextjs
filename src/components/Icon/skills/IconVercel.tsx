import { SVGProps } from "react";

type IconVercelProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconVercel = (props: IconVercelProps) => {
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
      <path d="M3 19h18L12 4z" />
    </svg>
  );
};

export default IconVercel;
