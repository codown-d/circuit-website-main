"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import "./index.css";

export default function FeaturesSection() {
  let items = [
    {
      icon: "/images/features_icon_1.svg",
      iconText: "Security first",
      img: "/images/features_1.svg",
      desc: [
        "Audited by several top security teams",
        "Team members fully KYC",
        "Testnet bug hunting program before launch",
      ],
    },
    {
      icon: "/images/features_icon_2.svg",
      iconText: "Security first",
      img: "/images/features_2.svg",
      desc: [
        "Stable and violate swap for low fees",
        "Concentrated liquidity",
        "Special swap for LSTs",
      ],
    },
    {
      icon: "/images/features_icon_3.svg",
      iconText: "Security first",
      img: "/images/features_3.svg",
      desc: ["Earn 5 different points", "Greater LP rewards for LSTs"],
    },
  ];
  return (
    <div
      className={clsx("features flex-c-c min-h-screen w-full")}
      style={{ justifyContent: "flex-start" }}
    >
      <p className={clsx("features-title flex-r-c f60")}>Features</p>
      <div
        className="flex-r mt60 w-full features-content"
        style={{ }}
      >
        {items.map((item, index) => {
          let { img, icon, iconText, desc } = item;
          return (
            <div
            key={index}
              className={`flex-c-c features-item features-item_${index}`}
              style={{
                alignItems: "flex-start",
                marginTop: `${120 * index}px`,
              }}
            >
              <div className="flex-r-c mb16">
                <img src={icon} />
                <span className="ml16">{iconText}</span>
              </div>
              <div
                className="content-desc flex-c"
                style={{ justifyContent: "space-between" }}
              >
                <img src={img} alt="" />
                <div className="mt100" style={{ padding: "0 0 20px 20px" }}>
                  {desc.map((ite,i) => {
                    return <p className="mt8"  key={i}>{ite}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
