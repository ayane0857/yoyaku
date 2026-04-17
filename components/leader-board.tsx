"use client";
import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import BoardColumn from "./board-column";

export type LeaderBoardType = {
  className?: string;
};

const LeaderBoard: NextPage<LeaderBoardType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#333] flex items-start !pt-[27px] !pb-[15px] !pl-[31px] !pr-[31px] box-border gap-[18px] max-w-full z-[1] !mt-[-40px] relative text-left text-[40px] text-[#000] font-[Inter] lg:flex-wrap ${className}`}
    >
      <Box className="h-40 w-[1280px] relative bg-[#333] hidden max-w-full shrink-0" />
      <Box className="flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-[18px] shrink-0 text-[#ddd]">
        <Box className="flex items-start !pt-0 !pb-0 !pl-[60px] !pr-[60px]">
          <Typography
            className="!m-0 relative z-[2] mq450:text-2xl mq450:leading-[29px] mq750:text-[32px] mq750:leading-[38px]"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "600", lineHeight: "48px" }}
          >
            本日の
          </Typography>
        </Box>
        <Typography
          className="!m-0 relative z-[2] mq450:text-[29px] mq750:text-[38px]"
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{ fontWeight: "600", fontSize: "48px", lineHeight: "70px" }}
        >
          最高得点者
        </Typography>
      </Box>
      <BoardColumn prop="1位" pt="9999 Pt" />
      <BoardColumn
        groupBoxBackgroundColor="#afafb0"
        groupBoxPadding="6px 38px 7px 40px"
        rectangleBoxBackgroundColor="#afafb0"
        frameBoxPadding="0px 53px 0px 50px"
        prop="2位"
        pt="8000 Pt"
      />
      <Box className="w-[220px] flex flex-col items-start !pt-3.5 !pb-0 !pl-0 !pr-0 box-border shrink-0 text-4xl">
        <Box className="self-stretch bg-[#762f07] flex items-start !pt-[5px] !pb-2 !pl-[39px] !pr-[39px] z-[2]">
          <Box className="h-20 w-[220px] relative bg-[#762f07] hidden z-[1] shrink-0" />
          <Box className="flex flex-col items-start !pt-[23px] !pb-0 !pl-0 !pr-0 shrink-0">
            <Typography
              className="!m-0 h-11 relative inline-block z-[1] mq450:text-[22px] mq750:text-[29px]"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "600" }}
            >
              7000 Pt
            </Typography>
          </Box>
          <Typography
            className="!m-0 relative z-[2] !ml-[-87px] shrink-0 mq450:text-[19px] mq450:leading-[23px]"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "24px", lineHeight: "29px" }}
          >
            3位
          </Typography>
        </Box>
      </Box>
      <Box className="h-[94px] w-[220px] flex flex-col items-start !pt-3.5 !pb-0 !pl-0 !pr-0 box-border shrink-0 text-2xl">
        <Box className="self-stretch flex-1 bg-[#757575] flex flex-col items-start !pt-[5px] !pb-2 !pl-3.5 !pr-3.5 z-[2]">
          <Box className="w-[220px] h-20 relative bg-[#757575] hidden z-[1] shrink-0" />
          <Typography
            className="!m-0 h-[29px] relative inline-block z-[1] shrink-0 mq450:text-[19px]"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600" }}
          >
            最新のプレイヤー
          </Typography>
          <Box className="self-stretch flex-1 flex items-start !pt-0 !pb-0 !pl-[26px] !pr-[27px] !mt-[-6px] relative shrink-0 text-4xl">
            <Typography
              className="!m-0 self-stretch relative z-[1] mq450:text-[22px] mq750:text-[29px]"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "600" }}
            >
              5345 Pt
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default LeaderBoard;
