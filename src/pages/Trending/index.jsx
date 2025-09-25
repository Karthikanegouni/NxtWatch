import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { MainContainer } from "../Home/styledComponents"
import {
  TrendingHeader,
  TrendingContainer,
  Icon,
  HeaderTitle,
  TrendingVideosListContainer,
} from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"
import LoaderComponent from "../../components/LoaderComponent"
import TrendingVideoItem from "../../components/TrendingVideoItem"
import FailureView from "../../components/FailureView"

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

const Trending = () => {
  const [trendingVideosList, settrendingVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const fetchTrendingVideos = async () => {
    try {
      setApiStatus(apiStatusConstants.inProgress)
      const trendingvideosApiUrl = "https://apis.ccbp.in/videos/trending"
      const jwtToken = Cookies.get("jwt_token")
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      }
      const response = await fetch(trendingvideosApiUrl, options)
      if (response.ok) {
        const { videos: Videos } = await response.json()
        const formatedData = Videos.map((video) => ({
          id: video.id,
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          title: video.title,
          viewCount: video.view_count,
        }))
        settrendingVideosList(formatedData)
        setApiStatus(apiStatusConstants.success)
        return
      }
      setApiStatus(apiStatusConstants.failure)
      return
    } catch (error) {
      setApiStatus(apiStatusConstants.failure)
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchTrendingVideos()
  }, [])

  const renderTrendingVideoItems = () => (
    <TrendingVideosListContainer>
      {trendingVideosList.map((video) => (
        <TrendingVideoItem key={video.id} video={video} />
      ))}
    </TrendingVideosListContainer>
  )

  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { isDark } = value
        const bgColor = isDark ? "#0f0f0f" : "#e2e8f0"

        const renderTrendingView = () => {
          switch (apiStatus) {
            case apiStatusConstants.inProgress:
              return <LoaderComponent />
            case apiStatusConstants.success:
              return renderTrendingVideoItems()
            case apiStatusConstants.failure:
              return <FailureView fetchData={fetchTrendingVideos} />
            default:
              return null
          }
        }
        return (
          <>
            <Header />
            <MainContainer dark={isDark}>
              <Sidebar />

              <TrendingContainer dark={isDark} data-testid="trending">
                <TrendingHeader dark={isDark} data-testid="banner">
                  <Icon size={50} color="red" bg={bgColor} />
                  <HeaderTitle>Trending</HeaderTitle>
                </TrendingHeader>

                {renderTrendingView()}
              </TrendingContainer>
            </MainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Trending
