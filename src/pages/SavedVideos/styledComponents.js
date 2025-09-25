import { MdPlaylistAdd } from "react-icons/md"
import styled from "styled-components"

export const EmptyViewContainer = styled.div`
  color: ${(props) => (props.dark ? "#cccccc" : "#424242")};
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  text-align: center;
  padding: 1em;
`

export const EmptyViewImg = styled.img`
  width: 100%;
  max-width: 250px;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`

export const EmptyViewHeading = styled.h1`
  color: ${(props) => (props.dark ? "#ffffff" : " #231f20")};
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const EmptyViewInfo = styled.p`
  color: ${(props) => (props.dark ? "#d7dfe9" : "#383838")};
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`

export const SavedVideosIcon = styled(MdPlaylistAdd)`
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  padding: 0.5em;
`
