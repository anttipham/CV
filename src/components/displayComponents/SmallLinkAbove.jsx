import React from 'react'
import LinkToNewTab from './LinkToNewTab'
import SmallTextAbove from './SmallTextAbove'

const SmallLinkAbove = ({ text='lähde', ...props }) => (
  <SmallTextAbove>
    <LinkToNewTab {...props}>
      {text}
    </LinkToNewTab>
  </SmallTextAbove>
)

export default SmallLinkAbove
