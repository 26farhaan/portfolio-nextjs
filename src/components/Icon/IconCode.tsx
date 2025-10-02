import { SVGProps } from "react";

type IconCodeProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconCode = (props: IconCodeProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16" />
  </svg>
);

export default IconCode;
