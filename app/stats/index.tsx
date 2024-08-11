"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import "./index.css";

export default function StatsSection() {
  let items_1 = [
    {
      title: "35K",
      desc: "Individual Users",
    },

    {
      title: "$8.500.000",
      desc: "Trading volume",
    }, 
    {
      title: "$850K",
      desc: "TVL",
    },

    {
      title: "30",
      desc: "Tokens",
    },
  ];
  return (
    <div
      className={clsx("stats flex-c-c w-full")}
      style={{ justifyContent: "flex-start" }}
    >
      <div className="stats-content p-r">
        <p className="stats-title mt150">STATS</p>
        <div
          className="flex-c-c p-a stats-data"
         
        >
          <div className="p-r">
            {items_1.map((item, index) => {
              return (
                <div className={`stats-item flex-c-c p-r stats-item_${index}`} key={index}>
                  <div className="pt60 w-full t-c" style={{overflow:'hidden'}}>{item.title}</div>
                  <div className="f18 fw400" style={{fontFamily:'Mark Pro'}}>{item.desc}</div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
