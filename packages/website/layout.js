import React from 'react'

const Layout = ({ global = {}, children }) => {
  const { navigation } = global
  
  return (
    <>
      <div className='radius' style={{ fontFamily: 'Rangle Riforma' }}>
        {navigation}
        {children}
      </div>
    </>
  )
}

export default Layout
