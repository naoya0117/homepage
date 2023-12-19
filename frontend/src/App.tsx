import axios from "axios"
import React, { useEffect, useState } from "react"

function App() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/greeting")
        setGreeting(response.data.greeting)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="App">
      hello world
      <p>{greeting}</p>
    </div>
  )
}

export default App;