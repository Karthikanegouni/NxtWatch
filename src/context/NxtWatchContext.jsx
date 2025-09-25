import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},

  showAdBanner: true,
  removeBanner: () => {},

  isLiked: () => {},
  isDisliked: () => {},
  isSaved: () => {},

  likedVideosList: [],
  toggleLike: () => {},

  savedVideosList: [],
  toggleSave: () => {},

  dislikedVideosList: [],
  toggleDislike: () => {},
})

export default NxtWatchContext
