import { SVGProps } from "react";

type IconAIProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconAI = (props: IconAIProps) => {
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
      <path d="M0 0h24v24H0z" stroke="currentColor" />
      <path d="M8 16v-6a2 2 0 1 1 4 0v6m-4-3h4m4-5v8" />
    </svg>
  );
};

export default IconAI;
