import { Button, Modal, Paper, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'

const OpenModalButton = withStyles({
  root: {
    top: '-0.4em',
    minWidth: 'auto',
    padding: '0 5px',
  },
  label: {
    fontSize: '0.5em',
  },
})(Button)

const ModalDiv = styled(Paper)`
  position: absolute;
  width: calc(90% - 42px);
  max-width: 800px;
  max-height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0 auto;
  padding: 10px 20px;
  border: 1px solid black;
  overflow-y: scroll;
`

const OpenModal = ({ text='lisätietoa', children }) => {
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
      <OpenModalButton color="primary" size="small" onClick={handleOpen}>
        {text}
      </OpenModalButton>

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

export default OpenModal
