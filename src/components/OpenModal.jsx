import { Link, Modal, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import SmallTextAbove from './wrappedComponents/SmallTextAbove'

const ModalDiv = styled(Paper)`
  position: absolute;
  width: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0 auto;
  padding: 10px 20px;
  border: 1px solid black;
`

const InfoModal = ({ text='lisätietoa', children }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = (event) => {
    if (event) {
      event.preventDefault()
    }
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <SmallTextAbove>
        <Link href="#" onClick={handleOpen}>
          {text}
        </Link>
      </SmallTextAbove>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Lisätietoja"
        aria-describedby="simple-modal-description"
      >
        <ModalDiv>
          {children}
        </ModalDiv>
      </Modal>
    </>
  )
}

export default InfoModal
