import { AiFillHome, HiFire, GiGamepad, MdPlaylistAdd } from "react-icons/all"
import { NavItemsListContainer } from "./styledComponents"
import NavItem from "../NavItem"

const NavItemsContainer = () => {
  const isActivePath = (path) => document.location.pathname === path

  const navItemsList = [
    {
      id: "menu-tab-1",
      path: "/",
      displayText: "Home",
      icon: (
        <AiFillHome
          size={25}
          color={isActivePath("/") ? "#de1414" : "#737070"}
        />
      ),
    },
    {
      id: "menu-tab-2",
      path: "/trending",
      displayText: "Trending",
      icon: (
        <HiFire
          size={25}
          color={isActivePath("/trending") ? "#de1414" : "#737070"}
        />
      ),
    },
    {
      id: "menu-tab-3",
      path: "/gaming",
      displayText: "Gaming",
      icon: (
        <GiGamepad
          size={25}
          color={isActivePath("/gaming") ? "#de1414" : "#737070"}
        />
      ),
    },
    {
      id: "menu-tab-4",
      path: "/saved-videos",
      displayText: "Saved Videos",
      icon: (
        <MdPlaylistAdd
          size={25}
          color={isActivePath("/saved-videos") ? "#de1414" : "#737070"}
        />
      ),
    },
  ]

  const renderMenuItems = () => (
    <NavItemsListContainer>
      {navItemsList.map((item) => (
        <NavItem
          key={item.id}
          navItem={item}
          isactive={isActivePath(item.path)}
        />
      ))}
    </NavItemsListContainer>
  )

  return <div>{renderMenuItems()}</div>
}

export default NavItemsContainer
