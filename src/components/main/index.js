import React from 'react';
import DisplayOne from './DisplayOne'
import DisplayTwo from './DisplayTwo'

import style from './main.scss'

const Main = () => (
  <div className={style["main"]}>
    <div className={style["container"]}>
     <div className={style["navigation"]}>
      <ul>
        <li className={style["Operations"]}>Operations</li>
        <li className={style["Executive"]}>Executive</li>
        <li className={style["Product-Knowledge"]}>Product Knowledge</li>
      </ul>
      <div className={style["content"]}>
        <div className={style["Rectangle-519"]}>
          <span className={style["Brewlogix-OG-Tavern-Location"]}>Brewlogix OG Tavern-Location</span>
        </div>
        <br/><br/>
        <div className={style['content-body']}>
          <DisplayOne style={style}/>
        </div>

        <div className={style['content-body2']}>
          <DisplayTwo style={style}/>
        </div>
      </div>
      <br/><br/>
     </div>
  </div>
   </div>
);

export default Main;