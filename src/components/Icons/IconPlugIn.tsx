import { SVGProps } from "react";

type IconPlugInProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconPlugIn = (props: IconPlugInProps) => {
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
      <path d="m7 12 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5zm10 0-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5m13-13L21 3m-11 8-2 2m5 1-2 2" />
    </svg>
  );
};

export default IconPlugIn;
