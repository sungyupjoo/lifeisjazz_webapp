import { css } from "@emotion/react";

export const globalStyles = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    margin: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "medium";
    font-weight: 400;
    src: url("../fonts/Pretendard-Medium.otf");
  }

  @font-face {
    font-family: "bold";
    font-weight: 800;
    src: url("../fonts/Pretendard-Bold.otf");
  }

  @font-face {
    font-family: "semibold";
    font-weight: 500;
    src: url("../fonts/Pretendard-SemiBold.otf");
  }

  @font-face {
    font-family: "regular";
    src: url("../fonts/Pretendard-Regular.otf");
  }
  h1 {
    font-family: bold;
    font-size: 6.4rem;
    color: #313131;
  }

  h2 {
    font-family: bold;
    font-size: 3.2rem;
    color: #313131;
  }

  h3 {
    font-family: semibold;
    font-size: 1.6rem;
    color: #313131;
  }

  h4 {
    font-family: regular;
    font-size: 1.2rem;
    color: #313131;
  }

  p {
    font-family: regular;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.74);
    line-height: 1.6rem;
    word-break: keep-all;
  }
`;
