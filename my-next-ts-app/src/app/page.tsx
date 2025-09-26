"use client";

import Header from "./components/Header";
import QuickMenu from "./components/quick";
import Footer from "./components/Footer";
import Main from "./pages/main";

export default function Home() {
  return (
    <div>
      <QuickMenu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
