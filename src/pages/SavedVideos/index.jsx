import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import {MainContainer} from '../Home/styledComponents'
import {
  TrendingHeader,
  TrendingContainer,
  HeaderTitle,
  TrendingVideosListContainer,
} from '../Trending/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoItem from '../../components/TrendingVideoItem'
import {
  EmptyViewContainer,
  EmptyViewHeading,
  EmptyViewImg,
  EmptyViewInfo,
  SavedVideosIcon,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value
      const bgColor = isDark ? '#0f0f0f' : '#e2e8f0'

      const renderSavedVideoItems = () => (
        <>
          <TrendingHeader dark={isDark} data-testid="banner">
            <SavedVideosIcon size={50} color="red" bg={bgColor} />
            <HeaderTitle>Saved Videos</HeaderTitle>
          </TrendingHeader>
          <TrendingVideosListContainer>
            {savedVideosList.map(video => (
              <TrendingVideoItem key={video.id} video={video} />
            ))}
          </TrendingVideosListContainer>
        </>
      )

      const renderEmptyView = () => (
        <EmptyViewContainer dark={isDark}>
          <EmptyViewImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <EmptyViewHeading dark={isDark}>
            No saved videos found
          </EmptyViewHeading>
          <EmptyViewInfo dark={isDark}>
            You can save your videos while watching them
          </EmptyViewInfo>
        </EmptyViewContainer>
      )

      return (
        <>
          <Header />
          <MainContainer dark={isDark}>
            <Sidebar />

            <TrendingContainer dark={isDark} data-testid="savedVideos">
              {savedVideosList.length !== 0
                ? renderSavedVideoItems()
                : renderEmptyView()}
            </TrendingContainer>
          </MainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
