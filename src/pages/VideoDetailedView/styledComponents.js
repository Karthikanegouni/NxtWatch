import styled from "styled-components"

export const DetailedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 2em 4em;
  }
`

export const VideoTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => (props.dark ? "#ffffff" : "#0f0f0f")};

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 40vh;

  @media screen and (min-width: 768px) {
    height: 576px;
  }
`
export const VideoContent = styled.div`
  padding: 1em;

  color: ${(props) => (props.dark ? "#cbd5e1" : "#383838")};
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export const StatsAndInteractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (min-width: 756px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const InteractionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const InteractionButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${(props) => (props.active ? "#2563eb" : "#64748b")};

  span {
    font-size: 1rem;
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }
`

export const HrRule = styled.hr`
  margin-top: 1.5em;
  width: 100%;
  border: 1px solid ${(props) => (props.dark ? "#64748b" : "#cbd5e1")};
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1em;
`

export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 1em;
  border: none;
`

export const ChannelNameAndCount = styled.div`
  p {
    :nth-child(1) {
      font-weight: bold;
    }
  }
`
export const ChannelDescription = styled.p`
  line-height: 1.5;
`
