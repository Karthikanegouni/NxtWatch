import { LinkItem, StyledNavButton } from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"

const NavItem = ({ navItem, isactive }) => (
  <NxtWatchContext.Consumer>
    {(value) => {
      const { isDark } = value
      const bgColor = isDark ? "#383838" : "#f1f5f9"

      return (
        <li>
          <LinkItem to={navItem.path}>
            <StyledNavButton
              isactive={isactive}
              type="button"
              dark={isDark}
              bgColor={bgColor}
            >
              <span>
                {navItem.icon}
                {navItem.displayText}
              </span>
            </StyledNavButton>
          </LinkItem>
        </li>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavItem
