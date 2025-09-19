import styled from "styled-components"

export const HeaderContainer = styled.div`
  border-radius: 1px solid red;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.dark ? "#212121" : "#ffffff")};
  height: 7vh;
  @media screen and (min-width: 768px) {
    padding: 1em 3em;
    height: 10vh;
  }
`
export const Logo = styled.img`
  height: 1.5rem;
  max-width: 150px;
  user-select: none;

  @media screen and (min-width: 576px) {
    height: 2rem;
  }
`
export const HeaderItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media screen and (min-width: 768px) {
    gap: 2em;
  }
`

export const Icon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`

export const SmallIcon = styled(Icon)`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  background-color: ${(props) => (props.dark ? "#181818" : "#f9f9f9")};
  color: ${(props) => (props.dark ? "#f1f1f1" : "#475569")};
  padding: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const Text = styled.p`
  font-size: 1rem;
`

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.outline ? "transparent" : props.bgcolor};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  border: 1px solid ${(props) => (props.outline ? props.color : "transparent")};
  padding: 0.7em 1em;
  border-radius: 5px;
  min-width: 100px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2em;
`

export const PopupWrapper = styled.div`
  padding: 0;
`

export const ProfileButton = styled(StyledButton)`
  display: none;

  @media screen and (min-width: 768px) {
    background: transparent;
    border: none;
    padding: 0;
    min-width: auto;

    img {
      max-height: 2rem;
      border-radius: 50%;
      display: block;
    }

    display: block;
  }
`

export const LogoutButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || "#3b82f6"};
  min-width: auto;
  padding: 0;

  @media screen and (max-width: 767px) {
    background-color: transparent;
    border: none;
    span {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0.5em 1em;
    svg {
      display: none;
    }
  }
`
export const MenuPopup = styled(PopupWrapper)`
  min-height: 100vh;
  background-color: ${(props) => (props.dark ? "#212121" : "#f9f9f9")};
  color: ${(props) => (props.dark ? "#f1f1f1" : "#475569")};
  width: 100vw;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
