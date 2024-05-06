import React from "react";
import { CardBody, CardContainer, CardItem } from "../utils/ThreeDCard/3D-card";
import PhoneMockUp from "../assets/images/phone mockup.png";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  sm:w-[30rem] md:w-[30rem] h-auto  p-6   ">
        <img src={PhoneMockUp} alt="PhoneMockUp" className=" w-[80%]" />
      </CardBody>
    </CardContainer>
  );
}
