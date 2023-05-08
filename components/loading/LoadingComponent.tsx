import { WorkourProgramCtxt } from '@/services/context/WorkoutProgramService';
import React from 'react'

const LoadingComponent = () => {
  const {states} = React.useContext(WorkourProgramCtxt);

  return ( <>
    {states?.isLoading ? <div className='loading bg-dark'>
          <div 
              className="spinner-border text-secondary spinner-loading mx-auto" 
              role="status">
          </div>
      </div>: null}
    </>
  )
}

export default LoadingComponent