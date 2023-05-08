import React from 'react'

interface Props{
  subtitle:string
  direction?: string
}

const PageSubtitle = ({subtitle, direction}:Props) => {
  return (
    <h2 style={{direction: direction === 'rtl'? 'rtl':'ltr'}} 
      className='my-3 subtitle mt-3'>
        {subtitle}
    </h2>
  )
}

export default PageSubtitle