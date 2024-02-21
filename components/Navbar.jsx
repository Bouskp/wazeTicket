import React from 'react'
import { styled, useTheme } from 'styled-components'
import { Button, Container, HeadingMain } from '../src/Pages/Wrapper'
import { Link, NavLink } from 'react-router-dom'

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(
      to left,
      rgba(32, 32, 32, 0.255),
      rgba(0, 0, 0, 0.077)
    ),
    url('./background.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  object-fit: contain;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  position: relative;
`

const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.first};
  text-transform: uppercase;
  font-weight: bold;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(15px);
`
const Nav = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
`
const NavLogo = styled(Link)`
  font-size: 3.5rem;
  margin-right: 19rem;
  color: white;

  span {
    color: ${({ theme }) => theme.first};
  }

  .black {
    color: black;
  }
`
const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > .navinput {
    border: 1px solid ${({ theme }) => theme.first};
    width: 100%;
    background: black;
    margin-right: 10rem;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    outline: none;
    color: ${({ theme }) => theme.first};
    font-size: 1.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.first};
      padding: 0 0.5rem;
    }
  }

  & > .navlist {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

export const Navbar = () => {
  return (
    <HeroSection id='hero'>
      <NavContainer>
        <Nav>
          <NavLogo to='/'>
            <span className='black'>W</span>
            <span>a</span>
            <span className='black'>z</span>
            <span>e</span>
          </NavLogo>
          <NavItems>
            <input
              type='text'
              placeholder='Chercher un evenement'
              className='navinput'
            />
            <ul className='navlist'>
              <Button to='/evenement'>
                <Link>Creer un evenement</Link>
              </Button>
              <Button>Se connecter</Button>
            </ul>
          </NavItems>
        </Nav>
      </NavContainer>
      <Container>
        <HeadingMain>N°1 DE LA BILLETTERIE ÉVÉNEMENTIELLE</HeadingMain>
        <HeroText>Touchez votre cible, vendez encore plus</HeroText>
        <ButtonWrapper>
          <Button>
            <Link to='/login'> se connecter</Link>
          </Button>
          <Button>
            <Link to='/register'>Creer un compte</Link>
          </Button>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  )
}
