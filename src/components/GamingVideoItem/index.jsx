import {
  GameThumbnailImage,
  GameTitle,
  GamingItem,
  LinkItem,
  Text,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const GamingVideoItem = ({video}) => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {id, thumbnailUrl, title, viewCount} = video
      return (
        <GamingItem>
          <LinkItem to={`videos/${id}`}>
            <GameThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <GameTitle dark={isDark}>{title}</GameTitle>
            <Text dark={isDark}>{`${viewCount} Watching`}</Text>
            <Text dark={isDark}>Worldwide</Text>
          </LinkItem>
        </GamingItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
