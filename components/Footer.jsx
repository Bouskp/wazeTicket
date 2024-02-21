import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import {
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaSearch,
  FaEnvelope,
} from 'react-icons/fa'

const FooterContainer = styled.div`
  background: linear-gradient(to left, #9a6e44, #000);
  min-height: 300px;
  padding: 30px 50px;
  color: white;
  width: 100%;
  border-top-left-radius: 125px;
`
const FooterRow = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`
const FooterCol = styled.div`
  flex-basis: 25%;
  padding: 10px;

  &:nth-child(2),
  &:nth-child(3) {
    flex-basis: 10%;
  }

  .title {
    margin-bottom: 30px;
    font-size: 3rem;
    width: 80px;

    span {
      &:nth-child(even) {
        color: ${({ theme }) => theme.first};
      }

      &:nth-child(odd) {
        color: black;
      }
    }
  }

  h3 {
    width: fit-content;
    margin-bottom: 40px;
    position: relative;
  }

  .email {
    width: fit-content;
    border-bottom: 1px solid ${({ theme }) => theme.first};
  }
  ul li {
    list-style: none;
    margin-bottom: 0.8rem;
  }

  form {
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme }) => theme.first};

    button,
    i {
      border: none;
      background: none;
      color: ${({ theme }) => theme.first};
      cursor: pointer;
      font-size: 1rem;
    }
  }

  form input {
    width: 100%;
    outline: none;
    padding: 2px 10px;
    background: none;
    border: none;
    color: white;
  }
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 1.5rem;
`
const SocialItems = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.first};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterCol>
          <h1 className='title'>
            <span>W</span>
            <span>a</span>
            <span>z</span>
            <span>e</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            repudiandae suscipit fugit officiis, sit quo? Nihil soluta doloribus
            illo.
          </p>
        </FooterCol>
        <FooterCol>
          <h3>Bouskp</h3>
          <p>+225 0711764383</p>
          <p className='email'>kouakouderek132@gmail.com</p>
        </FooterCol>
        <FooterCol>
          <h3>Liens</h3>
          <ul>
            <li>
              <Link to='\'>Home</Link>
            </li>
            <li>
              <Link to='\'>Fonctionnalités</Link>
            </li>
            <li>
              <Link to='\'>Services</Link>
            </li>
            <li>
              <Link to='\'>A propos</Link>
            </li>
          </ul>
        </FooterCol>
        <FooterCol>
          <h3>Newsletter</h3>
          <form>
            <i>
              <FaEnvelope />
            </i>
            <input type='email' placeholder='votre email' required />
            <button type='submit'>
              <FaSearch />
            </button>
          </form>
          <SocialContainer>
            <SocialItems>
              <FaTwitter />
            </SocialItems>
            <SocialItems>
              <FaYoutube />
            </SocialItems>
            <SocialItems>
              <FaLinkedin />
            </SocialItems>
          </SocialContainer>
        </FooterCol>
      </FooterRow>
    </FooterContainer>
  )
}

export default Footer
