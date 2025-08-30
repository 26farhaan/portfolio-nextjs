import { SVGProps } from "react";

type IconCSSProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconCSS = (props: IconCSSProps) => {
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
      <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
      <path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
    </svg>
  );
};

export default IconCSS;
