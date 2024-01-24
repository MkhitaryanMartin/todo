import { memo } from 'react';
import './style.css';


function Select(props) {
  return (
    props.register && <select
      className='Select'
      onChange={props.register.onChange}
      name={props.register.name}
      ref={props.register.ref}
      onBlur={props.register.onBlur}
    >
      {props.options.map(item => (
        <option key={item.value} value={item.value}>{item.title}</option>
      ))}
    </select>
  )
}

export default memo(Select);
