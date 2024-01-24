import {memo} from 'react';

import './style.css';
import SpinnerSvg from './spinner';

function Spinner({active, children}) {
  if (active) {
    return <div className='Spinner'>
      <SpinnerSvg/>
    </div>
  } else {
    return children;
  }
}

export default memo(Spinner);
