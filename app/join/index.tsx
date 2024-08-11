"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import "./index.css";
export default function JoinSection() {
  let items = [
    {
      title: "Traders",
      desc: "Swap any token on Zircuit mainnet in your familiar way with best price, earn kibbles while you trade.",
    },

    {
      title: "Liquidity provider",
      desc: "Earn Eigen/LSTs points, Zircuit points and kibbles while having great LP rewards.",
    },
  ];
  return (
    <div
      className={clsx("join flex-c-c")}
      style={{ justifyContent: "flex-start" }}
    >
      <div className="join-us">
        <p className="join-title">JOIN US AS</p>
        <div className="flex-r-c join-us-wrap">
          {items.map((item, index) => {
            return (
              <div className="join-us-item" key={index}>
                <p className="t-c join-item-title">{item.title}</p>
                <div className="join-us-cont"></div>
                <p className="join-item-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="join-footer p-r flex-c-c">
        <p className="join-footer-bg">
          JOIN THE
          <br />
          COMMUNITY
        </p>
        <div className="p-a join-footer-cont flex-c-c">
          <img src="/images/join_us_2.svg" alt="" style={{ zIndex: 1 }} />
          <p className="join-footer-title mt-28">
            JOIN THE
            <br />
            COMMUNITY
          </p>
        </div>
      </div>
      <div className="join-foot-btn flex-c-c" style={{ justifyContent: 'space-between', width: '100%' }}>
        <div className="foot-btn flex-r-c" style={{ justifyContent: 'space-between', }}>
          <div className="flex-r-c">
            <img src="/images/join_us_3.svg" alt="" />
            <div className="middle ml16">
              <div className="f16" style={{ color: '#fff' }}>
                Circuit <img src="/images/join_us_4.svg" alt="" style={{ display: 'inline-block' }} />
              </div>
              <div style={{ color: '#333' }}>@Circuit</div>
            </div>
          </div>
          <div className="btn f14">Follow</div>
        </div>
        <div style={{ width: '100%', flex: 1 }} className="p-r">
          <img src="/images/join_us_1.svg" alt="" className="footer-us-img" />
        </div>
        <p style={{ color: '#333' }} className="mb100">© 2024 circuit   Terms & conditions</p>
      </div>
    </div>
  );
}
