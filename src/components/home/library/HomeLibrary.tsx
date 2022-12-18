import React from 'react'
// Hooks
import { useNavigate } from 'react-router-dom'
// Components
import HomeTile from './HomeTile'
import HomeTiles from './HomeTiles'
import { PluginManager } from '@uncover/js-utils-microfrontend'

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

  const games = PluginManager.providers['ap-games/game']

  return (
    <HomeTiles>
      {games
        .sort((game1, game2) => {
          const name1 = game1.attributes.name as string
          const name2 = game2.attributes.name as string
          return name1.localeCompare(name2)
        })
        .map(game => {
          const {
            name,
            description,
            thumbnail
          } = game.attributes
          return (
            <HomeTile
              key={game.plugin}
              id={game.plugin}
              url={game.elements.main.url}
              name={name as string}
              description={description as string}
              thumbnail={thumbnail as string}
              onClick={() => handleGameClick(game.plugin)}
            />
          )
        })
      }
    </HomeTiles>
  )
}

export default HomeLibrary