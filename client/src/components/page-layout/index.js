import {memo} from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';

function PageLayout({head, footer, children}) {

  const cn = bem('PageLayout');

  return (
    <div className={cn()}>
      <div className={cn('head')}>
        {head}
      </div>
      <div className={cn('center')}>
        {children}
      </div>
      <div className={cn('footer')}>
        {footer}
      </div>
    </div>
  );
}


export default memo(PageLayout);
