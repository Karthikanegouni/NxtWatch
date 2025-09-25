import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import {
  FailureContainer,
  FailureImg,
  FailureInfo,
  FailureText,
  RetryButton,
  HomeContainer,
  MainContainer,
  SearchButton,
  SearchInput,
  SearchWrapper,
  VideoItemsContainer,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Banner from '../../components/Banner'
import LoaderComponent from '../../components/LoaderComponent'
import VideoItem from '../../components/VideoItem'
import FailureView from '../../components/FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [apiStatus, setapiStatus] = useState(apiStatusConstants.initial)
  const [videosList, setVideosList] = useState([])

  const fetchData = async () => {
    try {
      setapiStatus(apiStatusConstants.inProgress)
      const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const updatedData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        }))
        setVideosList(updatedData)
        setapiStatus(apiStatusConstants.success)
        return
      }
      setapiStatus(apiStatusConstants.failure)
      return
    } catch (error) {
      setapiStatus(apiStatusConstants.failure)
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        const renderNoVideosView = () => (
          <FailureContainer dark={isDark}>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureText dark={isDark}>No Search results found</FailureText>
            <FailureInfo dark={isDark}>
              Try different key words or remove search filter
            </FailureInfo>
            <RetryButton type="buttons" onClick={fetchData}>
              Retry
            </RetryButton>
          </FailureContainer>
        )

        const renderSuccessView = () =>
          !videosList?.length ? (
            renderNoVideosView()
          ) : (
            <VideoItemsContainer>
              {videosList.map(item => (
                <VideoItem key={item.id} video={item} />
              ))}
            </VideoItemsContainer>
          )

        const renderHomeView = () => {
          switch (apiStatus) {
            case apiStatusConstants.inProgress:
              return <LoaderComponent />
            case apiStatusConstants.success:
              return renderSuccessView()
            case apiStatusConstants.failure:
              return <FailureView fetchData={fetchData} />
            default:
              return null
          }
        }
        return (
          <>
            <Header />
            <MainContainer dark={isDark}>
              <Sidebar />
              <HomeContainer data-testid="home" dark={isDark}>
                <Banner />
                <SearchWrapper dark={isDark}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    dark={isDark}
                    onChange={e => {
                      setSearchInput(e.target.value)
                    }}
                  />
                  <SearchButton
                    type="button"
                    dark={isDark}
                    onClick={fetchData}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch />
                  </SearchButton>
                </SearchWrapper>
                {renderHomeView()}
              </HomeContainer>
            </MainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Home
