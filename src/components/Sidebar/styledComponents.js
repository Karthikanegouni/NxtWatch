import styled from "styled-components"

export const SidebarWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    max-width: 250px;
    height: 90vh;
    background-color: ${(props) => (props.dark ? "#212121" : "#f9f9f9")};
    color: ${(props) => (props.dark ? "#fff" : "#000")};
  }
`
export const ContactContainer = styled.div`
  padding: 1em;
`

export const Text = styled.p`
  width: 20ch;
  font-size: 1rem;
  font-weight: 500;
`
export const SocialContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1em;
`

export const SocialIcon = styled.img`
  height: 2rem;
`
