import { SVGProps } from "react";

type IconJiraProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconJira = (props: IconJiraProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={width} height={height} {...rest}>
      <path
        fill="currentColor"
        d="M562.5 305.7C489.6 233 393.1 135.8 321 64 155.5 228.9 78.5 305.7 78.5 305.7c-7.9 7.9-7.9 20.7 0 28.7C211.3 466.7 140.3 395.9 321 576c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6m-241.5 90L245 320l76-75.7 76 75.7z"
      />
    </svg>
  );
};

export default IconJira;
