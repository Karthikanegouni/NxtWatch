import { Link } from "react-router-dom"
import styled from "styled-components"

export const GamingItem = styled.li``

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const GameThumbnailImage = styled.img`
  width: 100%;
  max-width: 200px;

  @media screen and (min-width: 768px) {
    max-width: 290px;
  }
`

export const GameTitle = styled.h1`
  font-size: 1rem;
  line-height: 0.5;
  color: ${(props) => (props.dark ? "#ffffff" : "#0f0f0f")};
`

export const Text = styled.p`
  color: ${(props) => (props.dark ? "#cccccc" : "#606060")};
  line-height: 0.5;
`
