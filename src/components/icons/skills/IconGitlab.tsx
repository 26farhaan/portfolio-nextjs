import { SVGProps } from "react";

type IconGitlabProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconGitlab = (props: IconGitlabProps) => {
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
      <path d="m21 14-9 7-9-7L6 3l3 7h6l3-7z" />
    </svg>
  );
};

export default IconGitlab;
