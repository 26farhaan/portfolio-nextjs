import { SVGProps } from "react";

type IconHtml5Props = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconHtml5 = (props: IconHtml5Props) => (
  <svg
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
    <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
    <path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
  </svg>
);

export default IconHtml5;
