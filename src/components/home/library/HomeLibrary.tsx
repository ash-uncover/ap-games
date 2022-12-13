import { PluginManager } from 'lib/data/PluginManager'
import React from 'react'
// Hooks
import { useNavigate } from 'react-router-dom'
// Components
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

  const games = PluginManager.providers['game']
  console.log(games)

  return (
    <HomeTiles>
      {games
        .sort((game1, game2) => game1.properties.name.localeCompare(game2.properties.name))
        .map(game => {
          return (
            <HomeTile
              key={game.plugin}
              id={game.plugin}
              url={game.url}
              name={game.properties.name}
              description={game.properties.description}
              thumbnail={game.properties.thumbnail}
              onClick={() => handleGameClick(game.plugin)}
            />
          )
        })
      }
    </HomeTiles>
  )
}

export default HomeLibrary