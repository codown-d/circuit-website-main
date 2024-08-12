"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import "./index.css";
import { useEffect, useState } from "react";

let ImgCont = () => {
  return (
    <div className="flex-c-c" style={{ alignItems: "flex-end" }}>
      <p>OUR PARTNER</p>
      <img src="/images/join_vector.svg" alt="" style={{ width: "80%" }} />
    </div>
  );
};
let Zircuit = (props: any) => {
  let { title } = props;
  return (
    <div className="flex-r-c vector-pc">
      <img src="/images/vector.svg" alt="" />
      <span className="f32 ml8">{title}</span>
    </div>
  );
};
export default function VectorSection() {
  let list = ["Zircuit", "Zircuit", "Zircuit", "Zircuit"];
  let [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);
  return (
    <div
      className={clsx("vector flex-c-c p-r")}
      style={{ justifyContent: "flex-start" }}
    >
      <img src="/images/join_1.svg" alt="" className="w-full" />
      <div className="p-a img-cont">
        {isMobile ? (
          <ImgCont />
        ) : (
          <div
            className="flex-r-c img-cont-pc"
            style={{ justifyContent: "space-around" }}
          >
            <span className="f16">
              OUR
              <br />
              PARTNERS
            </span>
            {list.map((item, index) => {
              return <Zircuit title={item} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
