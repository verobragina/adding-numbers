import React from 'react';

import './popup.css'

const Popup = ({ active, setActive, children }) => {

  const activeClass = active ? 'active' : ''

  return (
    <div
      className={ `popup ${ activeClass }` }
      onClick={ () => setActive(false) }>
      <div
        className={ `popup__content ${ activeClass }` }
        onClick={ (e) => e.stopPropagation() }>
        <span>Сумма: { children } </span>
      </div>
    </div>
  )
}

export default Popup;
