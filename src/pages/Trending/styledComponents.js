import { HiFire } from "react-icons/hi"
import styled from "styled-components"

export const TrendingHeader = styled.div`
  width: 100%;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: ${(props) => (props.dark ? "#181818" : "#f1f1f1")};
  color: ${(props) => (props.dark ? "#ffffff" : "#0f0f0f")};
`
export const Icon = styled(HiFire)`
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  padding: 0.5em;
`
export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const TrendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${(props) => (props.dark ? "#0f0f0f" : "#f9f9f9")};
`

export const TrendingVideosListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex-wrap: wrap;

  @media screen and (min-width: 576px) {
    padding: 2em;
  }
`
