"use client";

import { useEffect } from "react";
import "../globals.css";

export default function Main() {

  return (
    <main>
      <div className="main_before"></div>
      <div className="main_station">
        <video muted autoPlay loop playsInline>
          <source src="/video/main.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );

}
