import { SVGProps } from "react";

type IconContactProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconContact = (props: IconContactProps) => {
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
      <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M19 16H7a2 2 0 0 0-2 2M9 8h6" />
    </svg>
  );
};

export default IconContact;
