import React, { ReactNode } from 'react'

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