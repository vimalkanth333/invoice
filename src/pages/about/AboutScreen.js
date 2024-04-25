import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://avatars.githubusercontent.com/u/131942639?s=400&u=7ef38f611077aff24457aaaca400813e875afb23&v=4"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              <a
                href="https://github.com/vimalkanth333"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hi, I'm vimalkanth
              </a>
              <h1> Free Invoice Maker for your business.</h1>
            </div>
          </div>

          <PageTitle title="Invoice Maker" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export PDF </li>
              <li> Can Export Image </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 I’m looking for help with JS dev to build Many Free Softwares
              to help people who can't afford !!
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:vimalkanth333@gmail.com"
                className="underline cursor-pointer"
              >
                vimalkanth333@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.instagram.com/mr_.silent._.king/?igsh=cGNlbXN4dHo1M3Yw"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                instagram
              </a>
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion For each component Animation</li>
              <li> Lottiefiles For Dashboard Widgets Icons</li>
              <li> IndexedDB for Local Storage </li>
              <li> ReactJS </li>
            </ul>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+919025827950"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +919025827950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
