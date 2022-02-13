import React, { useContext, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { UserContext } from "../context/UserContext"

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userContext, setUserContext] = useContext(UserContext)

  const formSubmitHandler = e => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const genericErrorMessage = "Something went wrong! Please try again later."

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, username: email, password }),
    })
      .then(async response => {
        setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!")
          } else if (response.status === 401) {
            setError("Invalid email and password combination.")
          } else if (response.status === 500) {
            console.log(response)
            const data = await response.json()
            if (data.message) setError(data.message || genericErrorMessage)
          } else {
            setError(genericErrorMessage)
          }
        } else {
          const data = await response.json()
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
        }
      })
      .catch(error => {
        setIsSubmitting(false)
        setError(genericErrorMessage)
      })
  }

  return (
    <Box textAlign='center'>
      <form onSubmit={formSubmitHandler} className="auth-form">
        <TextField
          id="firstName"
          label="First Name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          margin="normal"
          variant="filled"
          fullWidth
        />
        <TextField
          id="lastName"
          label="Last Name"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          margin="normal"
          variant="filled"
          fullWidth
        />
        <TextField
          id="email"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          margin="normal"
          variant="filled"
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          margin="normal"
          variant="filled"
          fullWidth
        />
        <Button
          variant="contained"
          disabled={isSubmitting}
          type="submit"
        >
          {`${isSubmitting ? "Registering" : "Register"}`}
        </Button>
      </form>
    </Box>
  )
}

export default Register
