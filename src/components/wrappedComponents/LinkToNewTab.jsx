import Link from '@material-ui/core/Link'
import React from 'react'
import PropTypes from 'prop-types'

const LinkToNewTab = (props) => {
  props = { ...props }
  if (!props.children) {
    props.children = props.href
  }
  return (
    <Link
      {...props}
      target="_blank" rel="noopener noreferrer"
    />
  )
}

LinkToNewTab.propTypes = {
  href: PropTypes.string.isRequired
}

export default LinkToNewTab
