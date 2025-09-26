"use client";

import { useState } from "react";
import "../globals.css";

export default function QuickMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleQuickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Quick 메뉴 토글 버튼 */}
      <button
        id="quickToggle"
        className="quick-toggle"
        onClick={toggleQuickMenu}
      >
        Quick
      </button>

      <div
        id="quick-placeholder"
        className={`quick-placeholder ${isOpen ? "on" : ""}`}
      >
        <aside className="quick">
          <ul>
            <li>
              <a href="#">
                <div className="img_wrap">
                  <img src="/quick_location.png" alt="오시는 길" />
                </div>
                오시는 길
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_wrap">
                  <img src="/quick_call.png" alt="전화상담" />
                </div>
                전화상담
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_wrap">
                  <img src="/quick_blog.png" alt="블로그" />
                </div>
                블로그
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_wrap">
                  <img src="/quick_utube.png" alt="유튜브" />
                </div>
                유튜브
              </a>
            </li>
            <li>
              <a href="#sec8">
                <div className="img_wrap">
                  <img src="/quick_time.png" alt="진료시간" />
                </div>
                진료시간
              </a>
            </li>
            <li id="top_btn" onClick={scrollToTop}>
              <div className="img_wrap">
                <img src="/quick_top.png" alt="TOP" />
              </div>
              TOP
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
