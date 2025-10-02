import { SVGProps } from "react";

type IconNPMProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconNPM = (props: IconNPMProps) => {
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
      <path d="M1 8h22v7H11v2H7v-2H1zm6 0v7m7-7v7m3-4v4M4 11v4m7-4v1m9-1v4" />
    </svg>
  );
};

export default IconNPM;
