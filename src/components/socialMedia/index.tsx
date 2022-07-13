import React from 'react'

import { MediaContainer, MediaList, MediaItem, IconLink } from './styled'

interface Props {
  mediaList: SheetGlobal.MediaList | null
  iconColor: string
}

const SocialMedia = ({ iconColor, mediaList}: Props): JSX.Element => {
  return (
    <MediaContainer iconColor={iconColor}>
      <MediaList>
        {mediaList.map((media) => {
          const { id, name, icon, url } = media
          return (
            <MediaItem key={id}>
              <IconLink href={url} target="_blank" iconColor={iconColor}>
                {icon}
              </IconLink>
            </MediaItem>
          )
        })}
      </MediaList>
    </MediaContainer>
  )
}

export default SocialMedia
