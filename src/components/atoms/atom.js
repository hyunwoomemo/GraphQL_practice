import { Global, css } from "@emotion/react"
import { BoxStyle, ButtonStyle, ContainerStyle, TagStyle, TitleStyle } from "./atomStyle"
import styled from "@emotion/styled"

export const Title = ({ size = "small", text }) => {
  return (
    <TitleStyle className={size}>
      {text}
    </TitleStyle>
  )
}

export const Button = ({ size = "small", text }) => {
  return (
    <ButtonStyle className={size}>
      {text}
    </ButtonStyle>
  )
}

export const Tag = ({ text }) => {
  return (
    <TagStyle>
      {text}
    </TagStyle>
  )
}

export const Container = ({ children }) => {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}

export const Box = ({ children }) => {
  return (
    <BoxStyle>
      {children}
    </BoxStyle>
  )
}

export const GlobalStyle = () => {
  const defaultStyle = css`
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
  `
  return (
    <Global styles={defaultStyle}></Global>
  )
}