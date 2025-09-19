import { MdClose } from "react-icons/md"
import styled from "styled-components"

export const BannerContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-position: 0%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 2em;
  user-select: none;
`

export const NxtwatchLogo = styled.img`
  height: 2.5em;
`
export const CloseBannerButton = styled(MdClose)`
  align-self: flex-end;
  font-size: 1.3em;
  cursor: pointer;
`

export const BannerText = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  width: 50%;

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`
export const StyledButton = styled.button`
  padding: 1em 2em;
  outline: none;
  background-color: transparent;
  border: 1px solid #000000;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
`
