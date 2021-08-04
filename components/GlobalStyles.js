import { white } from "colorette";
import { createGlobalStyle } from "styled-components";
import { COLORS, WEIGHTS } from "../lib/constants";


const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&family=Handlee&family=Benne&family=Gotu&family=Karla:wght@500&family=Mansalva&family=Maven+Pro:wght@600&family=Neucha&family=Quattrocento+Sans:wght@700&family=Tenali+Ramakrishna&display=swap');

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
    --line-height-body: 1.7;
    --color-white: ${COLORS.white};
    --color-black: ${COLORS.black};
    --color-primary: ${COLORS.primary};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-200: ${COLORS.gray[200]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    --font-weight-thin: ${WEIGHTS.thin};
    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-bold: ${WEIGHTS.bold};
}


`

export default GlobalStyles