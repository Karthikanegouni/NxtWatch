import { Redirect, Route, Switch } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import NxtWatchContext from "./context/NxtWatchContext"
import "./App.css"
import Trending from "./pages/Trending"
import Gaming from "./pages/Gaming"
import SavedVideos from "./pages/SavedVideos"
import VideoDetailedView from "./pages/VideoDetailedView"

const App = () => {
  const [isDark, setTheme] = useState(false)
  const [showAdBanner, closeBanner] = useState(true)

  const toggleTheme = () => {
    setTheme((prev) => !prev)
  }

  const removeBanner = () => {
    closeBanner(false)
  }

  return (
    <NxtWatchContext.Provider
      value={{
        isDark,
        toggleTheme,
        showAdBanner,
        removeBanner,
      }}
    >
      <div>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailedView}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </NxtWatchContext.Provider>
  )
}

export default App
