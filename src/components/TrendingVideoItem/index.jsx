import { formatDistanceToNow } from "date-fns"
import {
  TrendingVideoThumbnailImage,
  LinkItem,
  TrendingVideoCardItem,
  ChannelProfileImage,
  VideoContentContainer,
  VideoTextContent,
  Dot,
  Dot1,
  VideoTitle,
  ViewsAndDate,
} from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"

const TrendingVideoItem = ({ video }) => {
  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { isDark } = value
        const { id, title, publishedAt, viewCount, thumbnailUrl, channel } =
          video
        const date = new Date(publishedAt)
        const publishedDistance = formatDistanceToNow(date, {
          addSuffix: true,
          roundingMethod: "floor",
        })
        const publishedDate = publishedDistance.split(" ").slice(1).join(" ")
        return (
          <TrendingVideoCardItem>
            <LinkItem to={`/videos/${id}`}>
              <TrendingVideoThumbnailImage src={thumbnailUrl} alt={title} />
              <VideoContentContainer>
                <ChannelProfileImage src={channel.profileImageUrl} />
                <VideoTextContent dark={isDark}>
                  <VideoTitle dark={isDark}>{title}</VideoTitle>
                  <span>
                    <p>{channel.name}</p>
                    <Dot1 dark={isDark} />
                    <ViewsAndDate>
                      <p>{`${viewCount} views`}</p>
                      <Dot dark={isDark} />
                      <p>{publishedDate}</p>
                    </ViewsAndDate>
                  </span>
                </VideoTextContent>
              </VideoContentContainer>
            </LinkItem>
          </TrendingVideoCardItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
