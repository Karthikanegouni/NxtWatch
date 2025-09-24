import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import Cookies from "js-cookie"
import { MainContainer } from "../Home/styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"

const VideoDetailedView = ({ match }) => {
  const [videoDetails, setvideoDetails] = useState({})

  const { params } = match
  const { id } = params

  useEffect(() => {
    fetchVideoData()
  }, [])

  const fetchVideoData = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token")
      const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      }

      const response = await fetch(videoItemDetailsApiUrl, options)
      if (response.ok) {
        const { video_details: videoDetails } = await response.json()
        const formatedDetails = {
          id: videoDetails.id,
          description: videoDetails.description,
          published_at: videoDetails.published_at,
          thumbnailUrl: videoDetails.thumbnail_url,
          title: videoDetails.title,
          videoUrl: videoDetails.video_url,
          viewCount: videoDetails.view_count,
          channel: {
            name: videoDetails.channel.name,
            profilImageUrl: videoDetails.channel.profile_image_url,
            subscriberCount: videoDetails.channel.subscriber_count,
          },
        }
        setvideoDetails(formatedDetails)
      }
      return
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { isDark } = value
        const { videoUrl, title } = videoDetails
        return (
          <>
            <Header />
            <MainContainer dark={isDark}>
              <Sidebar />
              <div>
                <ReactPlayer url={videoUrl} width={"100%"} controls />
                <h1>{title}</h1>
              </div>
            </MainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoDetailedView
