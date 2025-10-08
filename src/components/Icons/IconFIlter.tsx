import { SVGProps } from "react";

type IconFIlterProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconFIlter = (props: IconFIlterProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 3H4a1 1 0 0 0-1 1v2.227l.008.223a3 3 0 0 0 .772 1.795L8 12.886V21a1 1 0 0 0 1.316.949l6-2 .108-.043A1 1 0 0 0 16 19v-6.586l4.121-4.12A3 3 0 0 0 21 6.171V4a1 1 0 0 0-1-1" />
    </svg>
  );
};

export default IconFIlter;
