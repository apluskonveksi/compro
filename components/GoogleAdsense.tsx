"use client";
import { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

export default function GoogleAdsense() {
    useEffect(() => {
        try {
            // Pastikan adsbygoogle tersedia
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("Adsense error", e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4091863714106054"
            data-ad-slot="8092187948"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
}
