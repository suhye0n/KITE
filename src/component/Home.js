import { useEffect, useState } from "react";
import axios from "axios";
import main1 from "../assets/main1.png";

export function Home() {
  return (
    <>
      <img src={main1} />
      <h1>동아리실 위치</h1>
      <p>경상북도 구미시 거의동 대학로 61, 금오공과대학교 학생회관 425호</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25775.217822633495!2d128.35893767910167!3d36.144593799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565c7823be9e40d%3A0xa60884b589570a61!2z6riI7Jik6rO16rO864yA7ZWZ6rWQIO2VmeyDne2ajOq0gA!5e0!3m2!1sko!2skr!4v1669813811977!5m2!1sko!2skr" allowfullscreen="false" loading="lazy"></iframe>
    
    </>
  );
}
