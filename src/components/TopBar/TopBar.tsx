import React, { useState } from "react";

import Alpaca from "../../assets/images/alpacuzz.jpg";
import TwitterLogo from "../../assets/images/TwitterLogo.png";

export const TopBar: React.FC = () => {
  const [toggleLeftTab, setToggleLeftTab] = useState(true);
  const [toggleRightTab, setToggleRightTab] = useState(false);

  const handleLeftTabClick = () => {
    setToggleLeftTab(true);
    setToggleRightTab(false);
  };

  const handleRightTabClick = () => {
    setToggleLeftTab(false);
    setToggleRightTab(true);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3">
        <img src={Alpaca} className="h-8 w-8 rounded-full" alt="Profile Pic" />

        <img src={TwitterLogo} className="h-[22px] w-[27px]" alt="Twitter Logo" />
        <div className="h-8 w-8 rounded-full"></div>
      </div>

      <div className="flex justify-center font-semibold">
        <div className="min-w-[227px]">
          <div
            className={`m-auto w-fit cursor-pointer px-4 py-4 text-center text-[15px] ${
              toggleLeftTab ? "border-b-4 border-[#4C9EEB]" : ""
            }`}
            onClick={handleLeftTabClick}
          >
            For you
          </div>
        </div>
        <div className="min-w-[227px]">
          <div
            className={`m-auto w-fit cursor-pointer px-4 py-4 text-center text-[15px] ${
              toggleRightTab ? "border-b-4 border-[#4C9EEB]" : ""
            }`}
            onClick={handleRightTabClick}
          >
            Following
          </div>
        </div>
      </div>
    </>
  );
};
