import { SVGProps } from "react";

type IconMaterialUIProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconMaterialUI = (props: IconMaterialUIProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" {...rest}>
      <path fill="currentColor" d="m1 5 6 4v20l-6-4z" />
      <path fill="currentColor" d="m47 20-6 4v13l6-4zm0-14-6 4v7l6-4zM35 5l-6 4v20l6-4z" />
      <path fill="currentColor" d="m1 12 17 11v-7L1 5z" />
      <path fill="currentColor" d="M35 12 18 23v-7L35 5zm0 14L18 37v-7l17-11zm12 8L30 45v-7l17-11z" />
      <path fill="currentColor" d="M30 37.765 18 30v7l12 7.765z" />
    </svg>
  );
};

export default IconMaterialUI;
