import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { MainContainer } from "../Home/styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"
import LoaderComponent from "../../components/LoaderComponent"
import FailureView from "../../components/FailureView"
import GamingVideoItem from "../../components/GamingVideoItem"
import {
  GamingListContainer,
  GamingContainer,
  GamingHeader,
  Icon,
  HeaderTitle,
} from "./styledComponents"

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

const Gaming = () => {
  const [gamingVideosList, setGamingVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const fetchGamingVideos = async () => {
    try {
      setApiStatus(apiStatusConstants.inProgress)
      const gamingVideosApiUrl = "https://apis.ccbp.in/videos/gaming"
      const jwtToken = Cookies.get("jwt_token")
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      }
      const response = await fetch(gamingVideosApiUrl, options)
      if (response.ok) {
        const { videos: Videos } = await response.json()
        const formatedData = Videos.map((video) => ({
          id: video.id,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          viewCount: video.view_count,
        }))
        setGamingVideosList(formatedData)
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
    fetchGamingVideos()
  }, [])

  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { isDark } = value
        const bgColor = isDark ? "#0f0f0f" : "#e2e8f0"

        const renderGamingVideoItems = () => (
          <GamingListContainer dark={isDark}>
            {gamingVideosList.map((video) => (
              <GamingVideoItem key={video.id} video={video} />
            ))}
          </GamingListContainer>
        )

        const renderGamingView = () => {
          switch (apiStatus) {
            case apiStatusConstants.inProgress:
              return <LoaderComponent />
            case apiStatusConstants.success:
              return renderGamingVideoItems()
            case apiStatusConstants.failure:
              return <FailureView fetchData={fetchGamingVideos} />
            default:
              return null
          }
        }

        return (
          <>
            <Header />
            <MainContainer dark={isDark}>
              <Sidebar />

              <GamingContainer dark={isDark} data-testid="gaming">
                <GamingHeader dark={isDark} data-testid="banner">
                  <Icon size={50} color="red" bg={bgColor} />
                  <HeaderTitle>Gaming</HeaderTitle>
                </GamingHeader>
                {renderGamingView()}
              </GamingContainer>
            </MainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Gaming
