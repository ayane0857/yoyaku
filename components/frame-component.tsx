"use client";
import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[0px] left-[0px] bg-[#333] flex flex-col items-start !pt-[17px] !pb-[82px] !pl-[18px] !pr-4 box-border gap-[55px] text-left text-[40px] text-[#ddd] font-[Inter] ${className}`}
    >
      <Image
        className="w-[300px] h-[712px] relative hidden shrink-0"
        width={300}
        height={712}
        sizes="100vw"
        alt=""
        src="/Rectangle-2.svg"
      />
      <Box className="self-stretch flex flex-col items-start shrink-0">
        <Box className="self-stretch flex items-start">
          <Image
            className="w-[106px] relative max-h-full z-[1]"
            loading="lazy"
            width={106}
            height={106}
            sizes="100vw"
            alt=""
            src="/game-controller-1.svg"
          />
          <Box className="flex-1 flex flex-col items-start !pt-[5px] !pb-0 !pl-0 !pr-0">
            <Box className="self-stretch flex flex-col items-start">
              <Typography
                className="!m-0 relative shrink-0 z-[1] mq450:text-2xl mq750:text-[32px]"
                variant="inherit"
                variantMapping={{ inherit: "h2" }}
                sx={{ fontWeight: "600" }}
              >
                次回呼出
              </Typography>
              <Box className="flex items-start !pt-0 !pb-0 !pl-[26px] !pr-[25px] !mt-[-3px] relative">
                <Typography
                  className="!m-0 relative shrink-0 z-[1] mq450:text-2xl mq750:text-[32px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "600" }}
                >
                  NEXT
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="self-stretch flex items-start !pt-0 !pb-0 !pl-3 !pr-3.5 shrink-0">
        <Box className="flex-1 flex flex-col items-start gap-[9px]">
          <Typography
            className="!m-0 relative z-[1] mq450:text-2xl mq750:text-[32px]"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "600", lineHeight: "58px" }}
          >
            平均待ち時間
          </Typography>
          <Box className="self-stretch flex items-start !pt-0 !pb-0 !pl-[82px] !pr-20 text-4xl">
            <Typography
              className="!m-0 relative z-[1] mq450:text-[22px] mq750:text-[29px]"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "600", lineHeight: "52px" }}
            >
              10分
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FrameComponent;
