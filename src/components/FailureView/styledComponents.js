import styled from "styled-components"

export const FailureContainer = styled.div`
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

export const FailureImg = styled.img`
  width: 100%;
  max-width: 250px;
`

export const FailureText = styled.h1`
  color: ${(props) => (props.dark ? "#ffffff" : " #231f20")};
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const FailureInfo = styled.p`
  color: ${(props) => (props.dark ? "#d7dfe9" : "#383838")};
  font-size: 1rem;
`

export const RetryButton = styled.button`
  padding: 0.7em 2em;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  cursor: pointer;
`
