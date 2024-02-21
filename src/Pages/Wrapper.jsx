import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../../components'
import { createGlobalStyle, styled, ThemeProvider } from 'styled-components'

// GlobalStyle
const Styles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
};
*>a {
  text-decoration: none;
  color: inherit
}
html{
  font-size: 16px;
}
`

// Theme
const theme = {
  first: '#F0B67F',
  second: '#FE5F55',
  third: '#251101ff',
  fourth: '#12664fff',
  fifth: '#f49cbbff',
}

// Certains composants
const Container = styled.div`
  width: 100%;
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 50px;
  position: relative;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`
const Section = styled.div`
  color: ${({ theme }) => theme.first};
  padding: 160px;
  background: ${({ inverse, theme }) => (inverse ? 'white' : theme.second)};
`
const HeadingMain = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse, theme }) => (inverse ? 'white' : theme.first)};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`

const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  font-weight: 600;
  background: ${({ theme }) => theme.first};
  padding: ${({ big }) => (big ? '0.8rem 2.5rem' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '1.2rem' : '1rem')};
  color: black;
  outline: none;
  border: 2px solid ${({ theme }) => theme.first};
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:before {
    background: black;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 102%;
    height: 0%;
  }

  &:hover:before {
    height: 200%;
  }

  &:hover {
    color: black;
    z-index: 1;
    border-radius: 4px;
    outline: none;
    color: ${({ theme }) => theme.first};
  }
`

const Wrapper = () => {
  return (
    <>
      <Styles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export { Wrapper, Button, HeadingMain, Section, Container }
