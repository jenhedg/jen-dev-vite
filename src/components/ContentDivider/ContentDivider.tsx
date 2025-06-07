import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={166.615}
    className="contentDivider"
    preserveAspectRatio="none"
    viewBox="0.4 0.2 200 44"
    {...props}
  >
    <g className="separator">
      <path
        d="M9.485 89.716H209.81v37.19l-99.346-33.2L9.579 127.392Z"
        style={{
          fill: "#b5002b",
        }}
        transform="translate(-9.222 -83.495)"
      />
      <path
        d="M9.354 83.627h200.328v36.664l-99.218-26.586L9.449 120.772Z"
        style={{
          fill: "#ff1a51",
        }}
        transform="translate(-9.222 -83.495)"
      />
    </g>
  </svg>
)
export default SvgComponent
