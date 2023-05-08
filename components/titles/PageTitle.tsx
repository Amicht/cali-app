import React from 'react';
import HighlightedWords from '../highlighted-words/HighlightedWords';

interface TitlePartI{
    ishighlighted:boolean,
    txt:string
}

const PageTitle = (props:{title:TitlePartI[], direction?:string}) => {
    const {title,direction} = props;
    return (
        <h1 style={{direction: direction === 'rtl'? 'rtl':'ltr'}} 
            className='my-3 title'>
            {title.map((titlePart, idx) => 
            <span key={idx}>
                {titlePart.ishighlighted? <HighlightedWords {...titlePart}/>: titlePart.txt} 
            </span>
            )}
        </h1> 
  )
}

export default PageTitle