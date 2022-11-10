import React from 'react'
import { FaLinkedin, FaGithubSquare, FaMedium, FaTwitterSquare } from 'react-icons/fa'

import { MediaContainer, MediaList, MediaItem, IconLink } from './styled'

interface Props {
  mediaList: Layout.MediaList | null
  color: string
}

const SocialMedia = ({ color, mediaList }: Props): JSX.Element => {
  return (
    <MediaContainer color={color}>
      <MediaList>
        {mediaList &&
          mediaList.map((media: Layout.Media) => {
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
              <MediaItem key={media.id}>
                <IconLink href={media.url} target="_blank" color={color}>
                  {ReactIcon(media.icon)}
                </IconLink>
              </MediaItem>
            )
          })}
      </MediaList>
    </MediaContainer>
  )
}

export default SocialMedia
