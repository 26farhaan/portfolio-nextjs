import { SVGProps } from "react";

type IconNuxtJsProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconNuxtJs = (props: IconNuxtJsProps) => {
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
      <path d="m12.146 8.583-1.3-2.09a1.046 1.046 0 0 0-1.786.017l-5.91 9.908A1.046 1.046 0 0 0 4.047 18H7.96m12.083 0c.743 0 1.201-.843.82-1.505l-4.044-7.013a.936.936 0 0 0-1.638 0l-4.043 7.013c-.382.662.076 1.505.819 1.505z" />
    </svg>
  );
};

export default IconNuxtJs;
