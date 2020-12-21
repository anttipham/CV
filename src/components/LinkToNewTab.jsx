import React from 'react'

const LinkToNewTab = (props) => {
  return (
    <a
      {...props}
      target="_blank" rel="noopener noreferrer"
    />
  )
}

export const A = LinkToNewTab
export default LinkToNewTab
