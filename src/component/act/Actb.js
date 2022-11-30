
import { useEffect, useState } from "react";
import axios from "axios";
import a1 from "../../assets/act/act2/act4.jpg";
import a2 from "../../assets/act/act2/act5.jpg";
import a3 from "../../assets/act/act2/act6.jpg";
import a4 from "../../assets/act/act2/act7.jpg";
import a5 from "../../assets/act/act2/act8.jpg";
import a6 from "../../assets/act/act2/act9.jpg";
import a7 from "../../assets/act/act2/act10.jpg";
import a8 from "../../assets/act/act2/act11.jpg";

export function Actb() {
  return (
    <>
      <h1 className="act-title">벚꽃</h1>
      <img src={a1} />
      <img src={a2} />
      <img src={a3} />
      <img src={a4} />
      <img src={a5} />
      <img src={a6} />
      <img src={a7} />
      <img src={a8} />
    </>
  );
}

