import { SVGProps } from "react";

type IconEducationProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconEducation = (props: IconEducationProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M22 9 12 5 2 9l10 4zv6" />
      <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
    </svg>
  );
};

export default IconEducation;
