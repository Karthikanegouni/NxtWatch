import {
  BannerContainer,
  NxtwatchLogo,
  CloseBannerButton,
  BannerText,
  StyledButton,
} from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"

const Banner = () => {
  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { showAdBanner, removeBanner } = value
        return (
          <>
            {showAdBanner && (
              <BannerContainer>
                <CloseBannerButton
                  type="button"
                  data-testid="close"
                  onClick={removeBanner}
                />
                <NxtwatchLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerText>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerText>
                <StyledButton outline color="black">
                  GET IT NOW
                </StyledButton>
              </BannerContainer>
            )}
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Banner
