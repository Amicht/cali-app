import React from 'react';

interface HighlightedI{
    txt:string
}

const HighlightedWords = (props:HighlightedI) => {
  return (
    <span className="highlighted-words">{props.txt}</span>
  )
}

export default HighlightedWords