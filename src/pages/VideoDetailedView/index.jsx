import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { formatDistanceToNow } from "date-fns"
import Cookies from "js-cookie"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { BiListPlus } from "react-icons/bi"
import { MainContainer } from "../Home/styledComponents"
import {
  DetailedItemContainer,
  VideoPlayerContainer,
  VideoContent,
  VideoTitle,
  StatsAndInteractionContainer,
  InteractionButton,
  InteractionButtonWrapper,
  HrRule,
  ChannelImage,
  ChannelContainer,
  ChannelNameAndCount,
  ChannelDescription,
} from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import {
  Dot,
  ViewsAndDate,
} from "../../components/TrendingVideoItem/styledComponents"
import LoaderComponent from "../../components/LoaderComponent"
import FailureView from "../../components/FailureView"

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

const VideoDetailedView = ({ match }) => {
  const [videoDetails, setvideoDetails] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const { params } = match
  const { id: Id } = params

  const fetchVideoData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const jwtToken = Cookies.get("jwt_token")
      const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${Id}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      }

      const response = await fetch(videoItemDetailsApiUrl, options)
      if (response.ok) {
        const { video_details: videoData } = await response.json()
        const formatedDetails = {
          id: videoData.id,
          description: videoData.description,
          publishedAt: videoData.published_at,
          thumbnailUrl: videoData.thumbnail_url,
          title: videoData.title,
          videoUrl: videoData.video_url,
          viewCount: videoData.view_count,
          channel: {
            name: videoData.channel.name,
            profileImageUrl: videoData.channel.profile_image_url,
            subscriberCount: videoData.channel.subscriber_count,
          },
        }
        setvideoDetails(formatedDetails)
        setApiStatus(apiStatusConstants.success)
        return
      }
      setApiStatus(apiStatusConstants.faiure)
      return
    } catch (error) {
      console.log(error.message)
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    fetchVideoData()
  }, [])

  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const {
          isDark,
          isLiked,
          isDisliked,
          isSaved,
          toggleLike,
          toggleDislike,
          toggleSave,
        } = value

        const {
          id,
          videoUrl,
          title,
          viewCount,
          publishedAt,
          description,
          channel = {},
        } = videoDetails

        const { name, profileImageUrl, subscriberCount } = channel
        const publishedDate = publishedAt ? new Date(publishedAt) : null
        const publishedDistance = publishedDate
          ? formatDistanceToNow(publishedDate, { addSuffix: true })
          : "Unknown date"
        const publishedDistanceStr = publishedDistance
          .split(" ")
          .slice(1)
          .join(" ")

        const renderSuccessView = () => (
          <DetailedItemContainer data-testid="videoItemDetails">
            <VideoPlayerContainer>
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
            </VideoPlayerContainer>
            <VideoContent dark={isDark}>
              <VideoTitle dark={isDark}>{title}</VideoTitle>
              <StatsAndInteractionContainer>
                <ViewsAndDate>
                  <p>{`${viewCount} views`}</p>
                  <Dot dark={isDark} />
                  <p>{publishedDistanceStr}</p>
                </ViewsAndDate>
                <InteractionButtonWrapper>
                  <InteractionButton
                    active={isLiked(id)}
                    type="button"
                    onClick={() => {
                      toggleLike(id)
                    }}
                  >
                    <span>
                      <AiOutlineLike size={25} /> Like
                    </span>
                  </InteractionButton>
                  <InteractionButton
                    active={isDisliked(id)}
                    type="button"
                    onClick={() => {
                      toggleDislike(id)
                    }}
                  >
                    <span>
                      <AiOutlineDislike size={25} /> Dislike
                    </span>
                  </InteractionButton>
                  <InteractionButton
                    active={isSaved(id)}
                    type="button"
                    onClick={() => {
                      toggleSave(videoDetails)
                    }}
                  >
                    <span>
                      <BiListPlus size={25} /> Save
                    </span>
                  </InteractionButton>
                </InteractionButtonWrapper>
              </StatsAndInteractionContainer>
              <HrRule dark={isDark} />

              <ChannelContainer>
                <ChannelImage src={profileImageUrl} />
                <ChannelNameAndCount>
                  <p>{name}</p>
                  <p>{`${subscriberCount} subscribers`}</p>
                  <ChannelDescription>{description}</ChannelDescription>
                </ChannelNameAndCount>
              </ChannelContainer>
            </VideoContent>
          </DetailedItemContainer>
        )

        const renderDetailedVideoView = () => {
          switch (apiStatus) {
            case apiStatusConstants.inProgress:
              return <LoaderComponent />
            case apiStatusConstants.success:
              return renderSuccessView()
            case apiStatusConstants.failure:
              return <FailureView />
            default:
              return null
          }
        }

        return (
          <>
            <Header />
            <MainContainer dark={isDark}>
              <Sidebar />
              {renderDetailedVideoView()}
            </MainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoDetailedView
