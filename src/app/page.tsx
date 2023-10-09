"use client";

import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import { Canvas } from "@/components/Canvas/Canvas";
import { Speakers } from "@/components/Speakers/Speakers";
import Info from "@/components/Info/Info";
import { Tickets } from "@/components/Tickets/Tickets";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const getQueryParams = () => {
  var url = window.location.href;

  if (!url) return;

  // Divide a URL em partes, separando pelos caracteres '?' e '&'
  var params = url.split("?")[1]?.split("&");

  if (!params || !params.length) return;

  var queryParams: any = {};

  // Itera sobre os parâmetros da consulta
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split("=");
    var paramName = decodeURIComponent(param[0]);
    var paramValue = decodeURIComponent(param[1]);
    queryParams[paramName] = paramValue;
  }

  return queryParams;
};

const Home = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const pixelCode = `<!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '3536686016594795');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=3536686016594795&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->`;

    const pixelNode = new DOMParser().parseFromString(pixelCode, "text/html");
    head?.appendChild(pixelNode.documentElement);
  }, []);

  const hasShowedToast = useRef(false)

  useEffect(() => {
    const coupon = getQueryParams()?.cupom;
    if (coupon && !hasShowedToast.current) {
      toast(`Cupom '${coupon}' aplicado!`);
      hasShowedToast.current = true
    }
  }, []);

  return (
    <div className={styles.main}>
      <Toaster />
      <div className={styles["hero-container"]}>
        {/* <Canvas /> */}
        <Hero />
      </div>
      <div className={styles["speakers"]}>
        <Speakers />
        <Info />
        <Tickets coupon={getQueryParams()?.cupom} />
      </div>
    </div>
  );
};

export default Home;
