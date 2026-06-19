import React, { useEffect, useState } from "react"

function WeatherWidget() {
  let [weather, setWeather] = useState(null)
  let [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        let success = false

        if (!success) {
          throw new Error("Server Error 500")
        }

        setWeather("25°C")
      } catch (err) {
        setError(err)
      }
    }

    fetchWeather()
  }, [])

  if (error) {
    throw error
  }

  return <h1>ამინდი: {weather}</h1>
}

export default WeatherWidget