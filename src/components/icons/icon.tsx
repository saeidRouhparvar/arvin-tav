import { FC, SVGProps } from "react";

type IconProps = {
  w?: number | string;
  h?: number | string;
  d: string;
  color?: string;
  viewBox?: string;
} & SVGProps<SVGSVGElement>;

const Icon: FC<IconProps> = ({
  w = 18,
  h = 18,
  d,
  color = "#757575",
  viewBox = "0 0 18 18",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d={d} fill={color} />
    </svg>
  );
};

export default Icon;
