import {memo} from 'react';
import './style.css';

function Head({title, children}) {
  return (
    <div className='Head'>
      <div className='Head-place'>
        <h1>{title}</h1>
      </div>
      <div className='Head-place'>{children}</div>
    </div>
  )
}


export default memo(Head);
