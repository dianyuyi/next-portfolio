import React from 'react'
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa'

import { MediaContainer, MediaList, MediaItem, IconLink } from './styled'

const SocialMedia = ({ mediaList }: { mediaList: Layout.MediaList }): JSX.Element => {
  return (
    <MediaContainer>
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
              }
            }
            return (
              <MediaItem key={media.id} aria-label={media.name}>
                <IconLink href={media.url} target="_blank">
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
