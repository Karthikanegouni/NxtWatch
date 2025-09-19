import styled from "styled-components"

export const LoginWrapper = styled.div`
  min-height: 100vh;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.dark ? "#212121" : "#ffffff")};
`

export const LoginForm = styled.form`
  background-color: ${(props) => (props.dark ? "#0f0f0f" : "#f9f9f9")};
  color: ${(props) => (props.dark ? "#f8fafc" : "#1e293b")};
  box-shadow: 0px 2px 14px ${(props) => (props.dark ? " #181818" : "#bfbfbf")};
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 3em 2em;
  border-radius: 10px;
  gap: 1.5em;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding: 4em 3em;
  }
`

export const NxtWatchLogo = styled.img`
  width: 50%;
  max-width: 200px;
  align-self: center;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  line-height: 2;
  font-weight: bold;
  color: ${(props) => (props.dark ? "#f1f1f1" : "#475569")};
`

export const Input = styled.input`
  padding: 0.6em 1em;
  border: 1px solid ${(props) => (props.dark ? "#475569" : "#cbd5e1")};
  border-radius: 5px;
  background-color: ${(props) => (props.dark ? "#0f0f0f" : "#f9f9f9")};
  color: ${(props) => (props.dark ? "#f1f1f1" : "#475569")};
  font-size: 1rem;
  outline: none;
`

export const ShowpasswordWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  font-size: 1rem;
`

export const ShowPasswordLabel = styled(Label)`
  color: ${(props) => (props.dark ? "#f9f9f9" : "#0f0f0f")};
  font-weight: 500;
`

export const LoginButton = styled.button`
  padding: 1em;
  border: none;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin: 0;
  line-height: 0;
`
