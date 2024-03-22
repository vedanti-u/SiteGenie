import * as React from "react";
const SvgLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"chat-bot"}</title>
    <path d="M16 19a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 16 19ZM20 8a2 2 0 1 0 2 2 1.98 1.98 0 0 0-2-2ZM12 8a2 2 0 1 0 2 2 1.98 1.98 0 0 0-2-2Z" />
    <path d="M17.736 30 16 29l4-7h6a1.997 1.997 0 0 0 2-2V6a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v14a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V6a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v14a4 4 0 0 1-4 4h-4.835Z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
export default SvgLogo;
