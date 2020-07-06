import React from "react";
import DisplayOne from "./DisplayOne";
import DisplayTwo from "./DisplayTwo";
import DisplayThree from "./DisplayThree";
import DisplayFour from "./DisplayFour";

import style from "./main.scss";

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
            <span className={style["Brewlogix-OG-Tavern-Location"]}>
              Brewlogix OG Tavern-Location
            </span>
          </div>
          <br />
          <br />
          <div className={style["content-body"]}>
            <DisplayOne style={style} />
          </div>

          <div className={style["content-body2"]}>
            <br />
            <div className={style["Rectangle-1459"]}>
              <span className={style["Throughput-Analysis"]}>
                Throughput Analysis
              </span>
            </div>
            <DisplayTwo style={style} />
          </div>

          <div className={style["content-body2"]}>
            <br />
            <div className={style["Rectangle-1459"]}>
              <span className={style["Throughput-Analysis"]}>
                Daily On Hand Inventory Analysis
              </span>
            </div>
            <DisplayThree style={style} />
          </div>

          <div className={style["content-body2"]}>
            <br />
            <div className={style["Rectangle-1459"]}>
              <span className={style["Throughput-Analysis"]}>
                Inventory-Turns-Variance
              </span>
            </div>
            <DisplayFour style={style} />
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  </div>
);

export default Main;
