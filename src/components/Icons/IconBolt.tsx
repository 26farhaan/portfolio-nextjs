import { SVGProps } from "react";

type IconBoltProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconBolt = (props: IconBoltProps) => {
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
      <path d="M13 3v7h6l-8 11v-7H5z" />
    </svg>
  );
};

export default IconBolt;
