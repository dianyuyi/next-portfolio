import React from 'react'
import { FaLinkedin, FaGithubSquare, FaMedium, FaTwitterSquare } from 'react-icons/fa'

import { MediaContainer, MediaList, MediaItem, IconLink } from './styled'

interface Props {
  mediaList: SheetGlobal.MediaList | null
  iconColor: string
}

const SocialMedia = ({ iconColor, mediaList }: Props): JSX.Element => {
  return (
    <MediaContainer iconColor={iconColor}>
      <MediaList>
        {mediaList.map((media) => {
          const { id, name, icon, url } = media
          const ReactIcon = (icon) => {
            switch (icon) {
              case 'FaLinkedin':
                return <FaLinkedin />
              case 'FaGithubSquare':
                return <FaGithubSquare />

              case 'FaMedium':
                return <FaMedium />
              case 'FaTwitterSquare':
                return <FaTwitterSquare />
            }
          }
          return (
            <MediaItem key={id}>
              <IconLink href={url} target="_blank" iconColor={iconColor}>
                {ReactIcon(icon)}
              </IconLink>
            </MediaItem>
          )
        })}
      </MediaList>
    </MediaContainer>
  )
}

export default SocialMedia
