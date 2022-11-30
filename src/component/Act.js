import "./Act.css";

import { useEffect, useState } from "react";
import axios from "axios";
import a1 from "../assets/act/act1/act1.jpg";
import a4 from "../assets/act/act2/act4.jpg";

export function Act() {
  return (
    <>
      <div className="act-container">
        <a href="/act/1">
          <div className="act">
            <div className="act-img">
              <img src={a1} />
            </div>
            <div className="act-info">
              <div className="act-title">보드게임</div>
              <div className="act-date">2022.1.1</div>
            </div>
          </div>
        </a>

        <a href="/act/2">
          <div className="act">
            <div className="act-img">
              <img src={a4} />
            </div>
            <div className="act-info">
              <div className="act-title">벚꽃</div>
              <div className="act-date">2022.1.1</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

