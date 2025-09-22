import NxtWatchContext from "../../context/NxtWatchContext"
import {
  ListItem,
  LinkItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from "./styledComponents"

const VideoItem = (props) => {
  const { video } = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { isDark } = value
        const textColor = isDark ? "#f9f9f9" : "#231f20"

        return (
          <LinkItem to={`/videos/${id}`}>
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </LinkItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
