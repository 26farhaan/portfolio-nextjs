import { SVGProps } from "react";

type IconCertificationProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconCertification = (props: IconCertificationProps) => {
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
      <path d="M12 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      <path d="M13 17.5V22l2-1.5 2 1.5v-4.5" />
      <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2" />
    </svg>
  );
};

export default IconCertification;
