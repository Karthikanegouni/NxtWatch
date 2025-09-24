import { withRouter, Link } from "react-router-dom"
import Cookies from "js-cookie"
import {
  BsMoon,
  BiSun,
  MdClose,
  GiHamburgerMenu,
  FiLogOut,
} from "react-icons/all"
import Popup from "reactjs-popup"
import {
  HeaderContainer,
  Logo,
  HeaderItemsContainer,
  Icon,
  PopupContainer,
  StyledButton,
  Text,
  ButtonsWrapper,
  PopupWrapper,
  SmallIcon,
  LogoutButton,
  ProfileButton,
  MenuPopup,
  MenuContainer,
} from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"
import NavItemsContainer from "../NavItemsContainer"

const Header = ({ history }) => (
  <NxtWatchContext.Consumer>
    {(value) => {
      const { isDark, toggleTheme } = value
      const logoUrl = isDark
        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      const iconColor = isDark ? "#f9f9f9" : "#181818"
      const btnColor = isDark ? "#f1f1f1" : "#3b82f6"

      const handleLogout = () => {
        Cookies.remove("jwt_token")
        history.replace("/login")
      }

      const renderMenuButton = () => (
        <Popup
          trigger={
            <SmallIcon>
              <GiHamburgerMenu color={iconColor} size={25} />
            </SmallIcon>
          }
          modal
        >
          {(close) => (
            <MenuPopup dark={isDark}>
              <Icon>
                <MdClose color={iconColor} onClick={close} size={30} />
              </Icon>
              <MenuContainer>
                <NavItemsContainer />
              </MenuContainer>
            </MenuPopup>
          )}
        </Popup>
      )

      const renderLogoutButton = () => (
        <PopupWrapper>
          <Popup
            trigger={
              <LogoutButton outline color={btnColor}>
                <FiLogOut size={25} color={iconColor} />
                <span>Logout</span>
              </LogoutButton>
            }
            modal
            position="center"
            overlayStyle={{
              backgroundColor: "#0000007f",
              backdropFilter: "blur(2px)",
            }}
          >
            {(close) => (
              <PopupContainer dark={isDark}>
                <Text>Are you sure you want to logout?</Text>
                <ButtonsWrapper>
                  <StyledButton
                    color="#94a3b8"
                    type="button"
                    outline
                    onClick={close}
                  >
                    Cancel
                  </StyledButton>
                  <StyledButton
                    bgcolor="#3b82f6"
                    type="button"
                    onClick={() => {
                      close()
                      handleLogout()
                    }}
                  >
                    Confirm
                  </StyledButton>
                </ButtonsWrapper>
              </PopupContainer>
            )}
          </Popup>
        </PopupWrapper>
      )

      return (
        <HeaderContainer dark={isDark}>
          <Link to="/">
            <Logo src={logoUrl} alt="website logo" />
          </Link>
          <HeaderItemsContainer>
            {isDark ? (
              <Icon data-testid="theme">
                <BiSun size={25} color="#ffffff" onClick={toggleTheme} />
              </Icon>
            ) : (
              <Icon data-testid="theme">
                <BsMoon size={25} color="#000000" onClick={toggleTheme} />
              </Icon>
            )}

            <ProfileButton>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            {renderMenuButton()}
            {renderLogoutButton()}
          </HeaderItemsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
