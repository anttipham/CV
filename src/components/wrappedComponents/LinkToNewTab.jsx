import Link from '@material-ui/core/Link'
import React from 'react'

const LinkToNewTab = (props) => {
  props = { ...props }
  if (!props.href && typeof props.children === 'string') {
    props.href = props.children
  }
  return (
    <Link
      {...props}
      target="_blank" rel="noopener noreferrer"
    />
  )
}

export default LinkToNewTab
