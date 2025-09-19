import NxtWatchContext from "../../context/NxtWatchContext"
import NavItemsContainer from "../NavItemsContainer"
import {
  SidebarWrapper,
  ContactContainer,
  Text,
  SocialIcon,
  SocialContainer,
} from "./styledComponents"

const socialIconsList = [
  {
    id: "facebook-logo",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png",
    altText: "facebook logo",
  },
  {
    id: "twitter-logo",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png",
    altText: "twitter logo",
  },
  {
    id: "linkedin-logo",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png",
    altText: "linked in logo",
  },
]

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {(value) => {
      const { isDark } = value

      const renderSocialsContainer = () => (
        <SocialContainer>
          {socialIconsList.map((item) => (
            <li key={item.id}>
              <SocialIcon src={item.imageUrl} alt={item.altText} />
            </li>
          ))}
        </SocialContainer>
      )

      return (
        <SidebarWrapper dark={isDark}>
          <NavItemsContainer />
          <ContactContainer>
            <Text>CONTACT US</Text>
            {renderSocialsContainer()}
            <Text>Enjoy! Now to see your channels and recommendations!</Text>
          </ContactContainer>
        </SidebarWrapper>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
