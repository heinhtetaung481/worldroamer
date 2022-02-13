import "./App.css";
import ButtonAppBar from "./layouts/Appbar";
import Footer from "./layouts/Footer";
import Home from "./Pages/Home";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useCallback, useContext, useEffect, useState } from "react"
import { UserContext } from "./context/UserContext"
import Login from "./components/Login"
import Register from "./components/Register"
import { textAlign } from "@mui/system";

function App() {
  const [userContext, setUserContext] = useContext(UserContext)
  const [tabValue, setTabValue] = useState('1');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const verifyUser = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()
        setUserContext(oldValues => {
          return { ...oldValues, token: data.token }
        })
      } else {
        setUserContext(oldValues => {
          return { ...oldValues, token: null }
        })
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000)
    })
  }, [setUserContext])

  useEffect(() => {
    verifyUser()
  }, [verifyUser])

  /**
   * Sync logout across tabs
   */
  const syncLogout = useCallback(event => {
    if (event.key === "logout") {
      // If using react-router-dom, you may call history.push("/")
      window.location.reload()
    }
  }, [])

  useEffect(() => {
    window.addEventListener("storage", syncLogout)
    return () => {
      window.removeEventListener("storage", syncLogout)
    }
  }, [syncLogout])

  return userContext.token === null ? (
    <Box sx={{ m: 'auto', width: {xs: '100%', md: '20%'}, typography: 'body1', justifyContent: 'center'}}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Login /></TabPanel>
        <TabPanel value="2"><Register /></TabPanel>
      </TabContext>
    </Box>
  ) :(
    <>
      <ButtonAppBar />
      <Home />
      <Footer />
    </>
  )
}

export default App;
