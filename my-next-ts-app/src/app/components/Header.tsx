"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../globals.css";

export default function Header() {
  useEffect(() => {
 
    // jQuery 대신 순수 JS로 변환
    const header = document.querySelector("header");

    function toggleHeaderClass(scrollTop: number) {
      if (window.innerWidth < 500) {
        header?.classList.add("on");
        return;
      }
      if (scrollTop > 15) header?.classList.add("on");
      else header?.classList.remove("on");
    }

    function highlightActiveMenuItem() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const items = document.querySelectorAll(".gnb li");

      items.forEach((li) => {
        li.classList.remove("active");
        const anchor = li.querySelector("a") as HTMLAnchorElement;
        const target = anchor?.getAttribute("href") || "";
        const section = document.querySelector(target);
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;

        if (
          scrollTop >= sectionTop - windowHeight / 2 &&
          scrollTop < sectionBottom - windowHeight / 2
        ) {
          li.classList.add("active");
        }
      });
    }

    function handleScroll() {
      const scrollTop = window.scrollY;
      toggleHeaderClass(scrollTop);

      // scroll 클래스 추가/제거
      if (scrollTop > 1) header?.classList.add("scroll");
      else header?.classList.remove("scroll");

      highlightActiveMenuItem();
    }

    window.addEventListener("scroll", handleScroll);

 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header>
      <div className="container header_in_wrap">
        {/* 로고 */}
        <div className="h_logo">
          <Link href="/">
            <img
              className="logo_wh"
              src="/h_logo_col_w"
              alt="서울에스마디척의원 로고"
            />
            <img
              className="logo_wh_m"
              src="/h_logo_wh.png"
              alt="서울에스마디척의원 로고 모바일"
            />
          </Link>

          <Link href="/">
            <img
              className="logo_default"
              src="/h_logo_col.png"
              alt="서울에스마디척의원 로고"
            />
            <img
              className="logo_default_m"
              src="/h_logo.png"
              alt="서울에스마디척의원 로고 모바일"
            />
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav>
          <ul className="gnb">
            <li>
              <a href="#sec1">
                <span>의료진 소개</span>
                <span>의료진 소개</span>
              </a>
            </li>
            <li>
              <a href="#sec2">
                <span>척추 관절 클리닉</span>
                <span>척추 관절 클리닉</span>
              </a>
            </li>
            <li>
              <a href="#sec3">
                <span>비수술 주사 치료</span>
                <span>비수술 주사 치료</span>
              </a>
            </li>
            <li>
              <a href="#sec4">
                <span>도수재활센터</span>
                <span>도수재활센터</span>
              </a>
            </li>
            <li>
              <a href="#sec5">
                <span>소아성장클리닉</span>
                <span>소아성장클리닉</span>
              </a>
            </li>
            <li>
              <a href="#sec6">
                <span>맞춤형 수액 클리닉</span>
                <span>맞춤형 수액 클리닉</span>
              </a>
            </li>
            <li>
              <a href="#sec7">
                <span>보유장비 및 둘러보기</span>
                <span>보유장비 및 둘러보기</span>
              </a>
            </li>
            <li>
              <a href="#sec8">
                <span>진료시간 및 오시는길</span>
                <span>진료시간 및 오시는길</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* 모바일 메뉴 */}
        <div className="header_link">
          <div className="menu-wrap">
            <button
              className="menu"
              onClick={(e) => {
                const target = e.currentTarget;
                target.classList.toggle("opened");
                target.setAttribute(
                  "aria-expanded",
                  target.classList.contains("opened").toString()
                );
              }}
              aria-label="Main Menu"
            >
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 
                  94.498839,28.817352 94.532987,66.711331 
                  94.543142,77.980673 90.966081,81.670246 
                  85.259173,81.668997 
                  79.552261,81.667751 75.000211,74.999942 
                  75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 
                  C 80.000231,70.999954 94.498839,71.182648 
                  94.532987,33.288669 
                  94.543142,22.019327 90.966081,18.329754 
                  85.259173,18.331003 
                  79.552261,18.332249 75.000211,25.000058 
                  75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
