import React from 'react'
// Hooks
import { useNavigate } from 'react-router-dom'
import { useWardProviders } from '@uncover/ward-react'
import { useTranslation } from 'react-i18next'
// Components
import HomeTile from './HomeTile'
import HomeTiles from './HomeTiles'
import { Panel } from '@uncover/games-common'

export interface HomeContentLibraryProperties {

}

export const HomeContentLibrary = ({

}: HomeContentLibraryProperties) => {

  // Hooks //

  const navigate = useNavigate()

  const { t } = useTranslation()

  const games = useWardProviders('ap-games/game')

  // Events //

  const handleGameClick = (gameId: string) => {
    navigate(`/games/${gameId}`)
  }

  // Rendering //


  return (
    <>
      <Panel>
        <h2>
          {t('home.library.title')}
        </h2>
      </Panel>
      <Panel title={t('home.library.games.title')}>
        <HomeTiles>
          {games
            .sort((game1, game2) => {
              const name1 = game1.attributes.name
              const name2 = game2.attributes.name
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
                  name={name}
                  description={description}
                  thumbnail={thumbnail}
                  onClick={() => handleGameClick(game.plugin)}
                />
              )
            })
          }
        </HomeTiles>
      </Panel>
    </>
  )
}