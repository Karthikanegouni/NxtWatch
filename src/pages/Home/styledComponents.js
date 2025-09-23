import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  height: 93vh;

  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${(props) => (props.dark ? "#181818" : "#f9f9f9")};

  @media screen and (min-width: 768px) {
    padding: 2em;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  width: 90%;
  max-width: 600px;
  border: 1px solid ${(props) => (props.dark ? "#606060" : "#cccccc")};
  margin: 1em auto 0em auto;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`

export const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  padding: 0.5em 1em;
  border-radius: 5px 0px 0px 5px;
  outline: none;
  border: none;
  background-color: ${(props) => (props.dark ? "#181818" : "#ffffff")};
  color: ${(props) => (props.dark ? "#cccccc" : "#424242")};
`

export const SearchButton = styled.button`
  padding: 0.5em 2em;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 0px 5px 5px 0px;
  border-left: 1px solid ${(props) => (props.dark ? "#606060" : "#cccccc")};
  cursor: pointer;
  background-color: ${(props) => (props.dark ? "#313131" : "#f4f4f4")};
  color: ${(props) => (props.dark ? "#ffffff" : "#000000")};
`

export const VideoItemsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;

  @media screen and (min-width: 768px) {
    gap: 2em;
    justify-content: flex-start;
  }
`
