// styledComponents.js
import { Link } from "react-router-dom"
import styled from "styled-components"

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    width: 100%;
    max-width: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 450px;
    max-width: 500px;
    margin-right: 20px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 12px;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 6px;
  color: ${(props) => props.color};

  &:hover {
    text-decoration: underline;
  }
`

export const ChannelName = styled.p`
  font-size: 13px;
  margin: 0;
  margin-bottom: 4px;
  color: ${(props) => props.color};
`

export const ViewsAndDate = styled.p`
  font-size: 12px;
  margin: 0;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  opacity: 0.8;
`

export const Dot = styled.span`
  padding: 0 6px;
  font-size: 14px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: inherit;
`
