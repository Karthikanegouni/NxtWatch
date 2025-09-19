import styled from "styled-components"
import { Link } from "react-router-dom"

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const StyledNavButton = styled.button`
  padding: 0.5em;
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.isactive ? props.bgColor : "transparent"};
  font-weight: ${(props) => (props.isactive ? "bold" : "500")};
  display: flex;
  color: ${(props) => (props.dark ? "#f4f4f4" : "#313131")};
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;

  span {
    display: flex;
    justify-content: flex-start;
    gap: 1em;
    align-items: center;
    width: 200px;
    margin-left: 10%;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 0.5em 1em;

    span {
      width: 100%;
      margin: 0;
    }
  }
`
