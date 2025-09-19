import Cookies from "js-cookie"
import { Redirect, Route } from "react-router-dom"

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("jwt_token")
  if (!jwtToken) return <Redirect to="/Login" />
  return <Route {...props} />
}

export default ProtectedRoute
