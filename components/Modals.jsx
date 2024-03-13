import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalMain = styled.div`
  position: absolute;
  background: white;
  width: 50%;
  height: auto;
`

const ModalCloser = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.first};
  border: none;
  transform: translate(25%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: black;
    font-size: 20px;
    cursor: pointer;
  }
`

function Modals({ children }) {
  const modalRef = useRef(null)
  const navigate = useNavigate()

  const handleClick = () => {
    modalRef.current.style.display = 'none'
    navigate('/')
  }

  return (
    <ModalContainer ref={modalRef}>
      <ModalMain>
        <ModalCloser onClick={handleClick}>
          <FaTimes />
        </ModalCloser>
        {children}
      </ModalMain>
    </ModalContainer>
  )
}

export default Modals
