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
  const [likedVideosList, setLikedVideosList] = useState([])
  const [dislikedVideosList, setDislikedVideosList] = useState([])
  const [savedVideosList, setSavedVideosList] = useState([])

  const toggleTheme = () => {
    setTheme((prev) => !prev)
  }

  const removeBanner = () => {
    closeBanner(false)
  }

  const toggleLike = (id) => {
    setLikedVideosList((prev) =>
      prev.includes(id) ? prev.filter((vid) => vid !== id) : [...prev, id]
    )

    setDislikedVideosList((prev) => prev.filter((vid) => vid !== id))
  }

  const toggleDislike = (id) => {
    setDislikedVideosList((prev) =>
      prev.includes(id) ? prev.filter((vid) => vid !== id) : [...prev, id]
    )

    setLikedVideosList((prev) => prev.filter((vid) => vid !== id))
  }

  const toggleSave = (video) => {
    setSavedVideosList((prev) => {
      const exists = prev.find((v) => v.id === video.id)
      if (exists) {
        return prev.filter((v) => v.id !== video.id)
      }
      return [...prev, video]
    })
  }

  const isLiked = (id) => likedVideosList.includes(id)
  const isDisliked = (id) => dislikedVideosList.includes(id)
  const isSaved = (id) => savedVideosList.some((video) => video.id === id)

  return (
    <NxtWatchContext.Provider
      value={{
        isDark,
        toggleTheme,
        showAdBanner,
        removeBanner,
        isLiked,
        isDisliked,
        isSaved,
        likedVideosList,
        toggleLike,
        dislikedVideosList,
        toggleDislike,
        savedVideosList,
        toggleSave,
      }}
    >
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
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
