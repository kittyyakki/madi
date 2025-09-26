"use client";

import { useEffect } from "react";
import "../globals.css";


export default function Footer() { 

    useEffect(() => {
      // footer.ts 또는 Footer 컴포넌트 useEffect 안에서

        const copyMenus =
          document.querySelectorAll<HTMLLIElement>(".copy_menu>li");
        const siteBg = document.querySelector<HTMLElement>(".site_bg");
        const siteTabs =
          document.querySelectorAll<HTMLLIElement>(".site_tab>li");
        const closeBtn = document.querySelector<HTMLElement>(".closeButton");

        // copy_menu 클릭
        copyMenus.forEach((menu, idx) => {
          menu.addEventListener("click", () => {
            siteBg?.classList.add("on");
            siteTabs.forEach((tab) => tab.classList.remove("on"));
            siteTabs[idx]?.classList.add("on");
          });
        });

        // 닫기 버튼 클릭
        closeBtn?.addEventListener("click", () => {
          siteBg?.classList.remove("on");
        });

        // site_bg 바깥 클릭 시 닫기
        document.addEventListener("click", (event) => {
          const target = event.target as HTMLElement;

          const clickedInsideMenu = Array.from(copyMenus).some(
            (menu) => menu === target || menu.contains(target)
          );

          if (!clickedInsideMenu) {
            siteBg?.classList.remove("on");
          }
        });

    }, []);
  
   return (
     <footer>
       <div className="content_inner">
         <div className="f_wrap">
           <div className="f_logo">
             <img src="/h_logo_wh.png" alt="서울에스마디척의원 로고" />
           </div>
           <div className="f_right">
             <b>서울에스마디척의원</b>
             <br />
             <b>주소</b> 서울특별시 구로구 오리로 1165, 모아엘가트레뷰 1층
             &nbsp;&nbsp;&nbsp;
             <b>대표자</b> 배건진 &nbsp;&nbsp;&nbsp;
             <b>사업자번호</b> 209-91-76139
             <br />
             <b>전화</b> 02-6263-8275 &nbsp;&nbsp;&nbsp;
             <b>팩스</b> 02-6263-8276 &nbsp;&nbsp;&nbsp;
             <b>메일</b> blueofsky90@naver.com
           </div>
         </div>

         <hr />

         <div className="f_wrap">
           <div>
             Copyrightⓒ 2025 Seoul S Madi Chuk Clinic All rights Reserved.
           </div>
           <ul className="copy_menu">
             <li>이용약관</li>
             <li>개인정보처리방침</li>
             <li>비급여진료비안내</li>
           </ul>
         </div>
       </div>
       <div className="footer_after"></div>
     </footer>
   );
  
}