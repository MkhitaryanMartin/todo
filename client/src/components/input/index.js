import {memo, useCallback, useLayoutEffect, useState} from 'react';
import {cn as bem} from '@bem-react/classname';
import debounce from 'lodash.debounce';
import './style.css';

function Input(props) {

  // const [value, setValue] = useState(props.value);

  // const onChangeDebounce = useCallback(
  //   debounce(value => props.onChange(value, props.name), 600),
  //   [props.onChange, props.name]
  // );

  // const onChange = (event) => {
  //   setValue(event.target.value);
  //   onChangeDebounce(event.target.value);
  // };

  
  // useLayoutEffect(() => setValue(props.value), [props.value]);

  const cn = bem('Input');
  return (
   <div className='Input__container'>
     <input
      className={cn({theme: props?.theme})}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.register.onChange}
      name={props.register.name}
      ref={props.register.ref}
      onBlur={props.register.onBlur}
      defaultValue={props.defaultValue}
    />
    <p className='Input__error-text'>{props.errorText}</p>
   </div>
  )
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  theme: '',
  onChange: () => {},
  name: '',
  value:"",
  defaultValue:""
};

export default memo(Input);
