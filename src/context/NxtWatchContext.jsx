import React from "react"

const NxtWatchContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},

  showAdBanner: true,
  removeBanner: () => {},
})

export default NxtWatchContext
