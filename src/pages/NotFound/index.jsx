import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import NxtWatchContext from "../../context/NxtWatchContext"
import { MainContainer } from "../Home/styledComponents"
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundInfo,
  NotFoundText,
} from "./styledComponents"

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {(value) => {
      const { isDark } = value

      const ImageUrl = isDark
        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"

      return (
        <>
          <Header />
          <MainContainer dark={isDark}>
            <Sidebar />
            <NotFoundContainer>
              <NotFoundImg src={ImageUrl} alt="not found" />
              <NotFoundText dark={isDark}>Page Not Found</NotFoundText>
              <NotFoundInfo dark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundInfo>
            </NotFoundContainer>
          </MainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
