import styled from "styled-components"

export const NavItemsListContainer = styled.ul`
  padding: 1em 0em;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100vh;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
