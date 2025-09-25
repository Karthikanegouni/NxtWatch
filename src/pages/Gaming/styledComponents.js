import { GiGamepad } from "react-icons/gi"
import styled from "styled-components"

export const GamingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${(props) => (props.dark ? "#0f0f0f" : "#f9f9f9")};

  @media screen and (min-width: 768px) {
  }
`

export const GamingHeader = styled.div`
  width: 100%;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: ${(props) => (props.dark ? "#181818" : "#f1f1f1")};
  color: ${(props) => (props.dark ? "#ffffff" : "#0f0f0f")};
`

export const GamingListContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1.5em;
  justify-content: center;
  color: ${(props) => (props.dark ? "#ffffff" : "#0f0f0f")};
  gap: 1.5em;

  @media screen and (min-width: 768px) {
    gap: 2em;
    justify-content: flex-start;
    padding: 2em;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const Icon = styled(GiGamepad)`
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  padding: 0.5em;
`
