import React, { ReactElement, useState } from 'react'
import PageMenuContent from './PageMenuContent'
import PageMenuSide, { PageMenuSideItems } from './PageMenuSide'

import './PageMenu.css'

const BACK = '__BACK__'

interface PageMenuProperties {
  page: PageMenuPageProperties
}

interface PageMenuPageProperties {
  id: string
  icon?: ReactElement
  title: string
  content: ReactElement | null
  pages?: PageMenuPageProperties[]
}

const PageMenu = ({
  page,
}: PageMenuProperties) => {

  // Hooks //

  const [parentPages, setParentPages] = useState<PageMenuPageProperties[]>([])
  const [menuPage, setMenuPage] = useState<PageMenuPageProperties>(page)
  const [displayPage, setDisplayPage] = useState<PageMenuPageProperties>(page.content ? page : page.pages![0])

  // Events //

  const handleItemClick = (id: string) => {
    if (id === BACK && parentPages.length) {
      const newPage: PageMenuPageProperties = parentPages.pop()!
      setMenuPage(newPage)
      setDisplayPage(newPage.content ? newPage : newPage.pages![0])
      setParentPages(parentPages)
    } else {
      const newPage: PageMenuPageProperties = menuPage.pages!.find(childPage => childPage.id === id)!
      if (newPage.pages && newPage.pages.length) {
        parentPages.push(menuPage)
        setMenuPage(newPage)
        setDisplayPage(newPage.content ? newPage : newPage.pages[0])
        setParentPages(parentPages)
      } else {
        setDisplayPage(newPage)
      }
    }
  }

  // Rendering //

  const buildItems = (): PageMenuSideItems[] => {
    const links: PageMenuSideItems[] = (menuPage.pages || []).map((subPage) => {
      return {
        id: subPage.id,
        icon: subPage.icon,
        selected: subPage === displayPage,
        text: subPage.title
      }
    })
    if (parentPages.length) {
      links.push({
        id: BACK,
        selected: false,
        text: 'Back'
      })
    }
    return links
  }

  return (
    <div className='page-menu'>
      <PageMenuSide
        collapsed={false}
        title={menuPage.title}
        items={buildItems()}
        onItemClick={handleItemClick}
      />
      <PageMenuContent>
        {displayPage.content}
      </PageMenuContent>
    </div>
  )
}

export default PageMenu