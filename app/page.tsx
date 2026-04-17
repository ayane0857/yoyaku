"use client";
import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import LeaderBoard from "../components/leader-board";

export default function Page() {
  return (
    <Box className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">
      <main className="self-stretch h-[712px] relative">
        <Image
          className="absolute top-[0px] left-[300px] w-[980px] h-[672px] object-cover z-[2]"
          width={980}
          height={672}
          sizes="100vw"
          alt=""
          src="/336-980x672-1@2x.png"
        />
        <FrameComponent />
      </main>
      <LeaderBoard />
    </Box>
  );
}
