import { Link } from "react-router-dom"
import styled from "styled-components"

export const TrendingVideoCardItem = styled.li`
  width: 100%;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: unset;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const TrendingVideoThumbnailImage = styled.img`
  width: 100%;
  max-height: 300px;
  margin-bottom: 1em;

  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 500px;
  }
`

export const VideoContentContainer = styled.div`
  display: flex;
  gap: 1em;
  padding: 0em 1em;
`
export const ChannelProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.dark ? "#cbd5e1" : "#383838")};

  span {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  @media screen and (min-width: 576px) {
    span {
      align-items: flex-start;
      flex-direction: column;
      gap: 0;
    }
  }
`

export const ViewsAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const VideoTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 0;
  color: ${(props) => (props.dark ? "#ffffff" : "#0f0f0f")};

  :hover {
    text-decoration: underline;
  }
`

export const Dot = styled.div`
  height: 5px;
  width: 5px;
  background-color: ${(props) => (props.dark ? "#cbd5e1" : "#383838")};
  border-radius: 50%;
`
export const Dot1 = styled(Dot)`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
