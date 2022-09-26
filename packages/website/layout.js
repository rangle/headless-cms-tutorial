import React from 'react'

const Layout = ({ global = {}, children }) => {
  const { navigation } = global
  console.log({navigation})
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
