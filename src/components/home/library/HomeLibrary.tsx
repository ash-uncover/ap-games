import { Plugins } from 'lib/data'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeTile from './HomeTile'
import HomeTiles from './HomeTiles'

interface HomeLibraryProperties {

}

const HomeLibrary = ({

}: HomeLibraryProperties) => {

  // Hooks //

  const navigate = useNavigate()

  // Events //

  const handleGameClick = (gameId: string) => {
    navigate(`/games/${gameId}`)
  }

  // Rendering //

  return (
    <HomeTiles>
      {Object.values(Plugins)
        .sort((game1, game2) => game1.name.localeCompare(game2.name))
        .map(game => {
          return (
            <HomeTile
              key={game.id}
              {...game}
              onClick={() => handleGameClick(game.id)}
            />
          )
        })
      }
    </HomeTiles>
  )
}

export default HomeLibrary