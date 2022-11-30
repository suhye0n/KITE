import { useEffect, useState } from "react";
import axios from "axios";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";

export function About() {
  return (
    <>
      <img src={About1} alt="Logo img" style={{ width: "100%" }} />
      <img src={About2} alt="Logo img" style={{ width: "100%" }} />
      <p>안녕하세요 금오공과대학교 영어회화 동아리 KITE 입니다❗️❗️</p>
      <p>다가오는 22학년도 저희와 함께 하실 신입부원을 모집합니다😍😍</p>
    </>
  );
}
