import React, { ReactNode } from 'react'

import './PageMenuContent.css'

interface PageMenuContentProperties {
  children: ReactNode
}

const PageMenuContent = ({
  children,
}: PageMenuContentProperties) => {

  // Rendering //

  return (
    <div className='page-menu-content'>
      {children}
    </div>
  )
}

export default PageMenuContent