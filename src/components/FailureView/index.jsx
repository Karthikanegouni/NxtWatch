import NxtWatchContext from "../../context/NxtWatchContext"
import {
  FailureContainer,
  FailureImg,
  FailureText,
  FailureInfo,
  RetryButton,
} from "./styledComponents"

const FailureView = ({ fetchData }) => (
  <NxtWatchContext.Consumer>
    {(value) => {
      const { isDark } = value
      const failureImgUrl = isDark
        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      return (
        <FailureContainer dark={isDark}>
          <FailureImg src={failureImgUrl} alt="failure view" />
          <FailureText dark={isDark}>Oops! Something Went Wrong</FailureText>
          <FailureInfo dark={isDark}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureInfo>
          <RetryButton type="button" onClick={fetchData}>
            Retry
          </RetryButton>
        </FailureContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureView
