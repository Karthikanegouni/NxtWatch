import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import {
  HomeContainer,
  MainContainer,
  SearchButton,
  SearchInput,
  SearchWrapper,
  VideoItemsContainer,
} from "./styledComponents"
import NxtWatchContext from "../../context/NxtWatchContext"
import Banner from "../../components/Banner"
import LoaderComponent from "../../components/LoaderComponent"
import { AiOutlineSearch } from "react-icons/ai"

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const [apiStatus, setapiStatus] = useState(apiStatusConstants.initial)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setapiStatus(apiStatusConstants.inProgress)
      const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
      const jwtToken = Cookies.get("jwt_token")
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setapiStatus(apiStatusConstants.success)
      }
      return setapiStatus(apiStatusConstants.failure)
    } catch (error) {
      setapiStatus(apiStatusConstants.failure)
      console.log(error.message)
    }
  }

  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { isDark } = value
        return (
          <>
            <Header />
            <MainContainer>
              <Sidebar />
              <HomeContainer data-testid="home" dark={isDark}>
                <Banner />
                <SearchWrapper dark={isDark}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    dark={isDark}
                    onChange={(e) => {
                      setSearchInput(e.target.value)
                    }}
                  />
                  <SearchButton type="button" dark={isDark} onClick={fetchData}>
                    <AiOutlineSearch />
                  </SearchButton>
                </SearchWrapper>
                <VideoItemsContainer></VideoItemsContainer>
              </HomeContainer>
            </MainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Home
