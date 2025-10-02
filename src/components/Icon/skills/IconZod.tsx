import { SVGProps } from "react";

type IconZodProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

const IconZod = (props: IconZodProps) => {
  const { width = props.size || 24, height = props.size || 24, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" width={width} height={height} {...rest}>
      <g clipPath="url(#a)">
        <path fill="#18253f" d="M22.94 15.373h50.833l14.896 15.551-42.147 47.207L7.325 30.924z" />
        <path fill="#274d82" d="M56.739 66.98H36.815l-9-11.016h25.502V54.4h14.577z" />
        <path
          fill="#274d82"
          d="M84.392 26.49 29.415 58.23l-7.172-8.971 42.56-24.573-.78-1.355 11.335-6.545zM54.936 15.389l-41.28 23.833-6.42-8.015L34.875 15.25z"
        />
        <g filter="url(#b)">
          <path
            fill="#000"
            d="M75.76 10.702H21.005L1 30.604l45.419 54.693 3.623-4.065L95 30.792zm-2 4.686 14.86 15.518-42.076 47.208L7.341 30.906 22.94 15.388z"
          />
        </g>
        <path
          fill="#3068b7"
          d="M75.76 10.702H21.005L1 30.604l45.419 54.693 3.623-4.065L95 30.792zm-2 4.686 14.86 15.518-42.076 47.208L7.341 30.906 22.94 15.388z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h96v96H0z" />
        </clipPath>
        <filter
          id="b"
          width="102"
          height="82.596"
          x="-2"
          y="7.702"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1011_25474" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1011_25474" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default IconZod;
