import React, { useContext } from 'react'
import { Theme } from './Theme'

function Home() {

  const { theme, toggle } = useContext(Theme)
  return (
    <div>

      <h1>Home page</h1>
      {console.log(theme)}
    </div>
  )
}

export default Home