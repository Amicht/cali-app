import React from 'react';

interface Props{
    value: string | number;
    titleType: string;
}

const InfoTitleComponent = ({titleType, value}:Props) => {
  return (
    <div className='col workout-info mt-2'>
        <h6 className='content'>{value}</h6>
        <span className='subtitle'>{titleType}</span>
    </div>
  )
}

export default InfoTitleComponent