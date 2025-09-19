import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  InputWrapper,
  Label,
  LoginForm,
  LoginWrapper,
  NxtWatchLogo,
  Input,
  LoginButton,
  ShowPasswordLabel,
  ShowpasswordWrapper,
  ErrorMessage,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Login = ({history}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({display: false, message: ''})

  const clearStates = () => {
    setUsername('')
    setPassword('')
  }

  const handleLogin = async e => {
    e.preventDefault()
    setError({display: false, message: ''})
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const payload = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    }

    try {
      const response = await fetch(loginApiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const {jwt_token: jwtToken} = data
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        clearStates()
        history.replace('/')
      } else {
        const errorResponse = await response.json()
        const {error_msg: ErrorMsg} = errorResponse
        setError({display: true, message: `*${ErrorMsg}`})
      }
    } catch (errorResponse) {
      console.log(errorResponse.message)
    }
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const token = Cookies.get('jwt_token')
        if (token) return <Redirect to="/" />
        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <LoginWrapper dark={isDark}>
            <LoginForm dark={isDark} onSubmit={handleLogin}>
              <NxtWatchLogo src={logoUrl} />
              <InputWrapper>
                <Label dark={isDark} htmlFor="username">
                  USERNAME
                </Label>
                <Input
                  dark={isDark}
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <Label dark={isDark} htmlFor="password">
                  PASSWORD
                </Label>
                <Input
                  dark={isDark}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputWrapper>

              <ShowpasswordWrapper>
                <Input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => {
                    setShowPassword(prev => !prev)
                  }}
                />
                <ShowPasswordLabel dark={isDark} htmlFor="showPassword">
                  Show Password
                </ShowPasswordLabel>
              </ShowpasswordWrapper>

              <LoginButton type="submit">Login</LoginButton>
              {error.display && <ErrorMessage>{error.message}</ErrorMessage>}
            </LoginForm>
          </LoginWrapper>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Login
