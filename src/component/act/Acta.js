
import { useEffect, useState } from "react";
import axios from "axios";
import a1 from "../../assets/act/act1/act1.jpg";
import a2 from "../../assets/act/act1/act2.jpg";
import a3 from "../../assets/act/act1/act3.jpg";

export function Acta() {
  return (
    <>
      <h1 className="act-title">보드게임</h1>
      <img src={a1} />
      <img src={a2} />
      <img src={a3} />
    </>
  );
}

