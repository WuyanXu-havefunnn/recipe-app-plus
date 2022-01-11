import React from 'react'
import styled from 'styled-components'

export default function SocialMediaIcon({ link, src }) {
  return <SocialMedia src={src} href={link} target="_blank" />
}

const SocialMedia = styled.a`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  cursor: pointer;
`
