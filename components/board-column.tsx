"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";

export type BoardColumnType = {
  className?: string;
  prop?: string;
  pt?: string;

  /** Style props */
  groupBoxBackgroundColor?: CSSProperties["backgroundColor"];
  groupBoxPadding?: CSSProperties["padding"];
  rectangleBoxBackgroundColor?: CSSProperties["backgroundColor"];
  frameBoxPadding?: CSSProperties["padding"];
};

const BoardColumn: NextPage<BoardColumnType> = ({
  className = "",
  groupBoxBackgroundColor,
  groupBoxPadding,
  rectangleBoxBackgroundColor,
  frameBoxPadding,
  prop,
  pt,
}) => {
  const groupBoxStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupBoxBackgroundColor,
      padding: groupBoxPadding,
    };
  }, [groupBoxBackgroundColor, groupBoxPadding]);

  const rectangleBoxStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleBoxBackgroundColor,
    };
  }, [rectangleBoxBackgroundColor]);

  const frameBoxStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameBoxPadding,
    };
  }, [frameBoxPadding]);

  return (
    <Box
      className={`flex flex-col items-start !pt-[13px] !pb-0 !pl-0 !pr-0 shrink-0 text-left text-2xl text-[#000] font-[Inter] ${className}`}
    >
      <Box
        className="bg-[#ffc009] flex flex-col items-start !pt-1.5 !pb-[7px] !pl-10 !pr-10 z-[2]"
        style={groupBoxStyle}
      >
        <Box
          className="w-[220px] h-20 relative bg-[#ffc009] hidden shrink-0"
          style={rectangleBoxStyle}
        />
        <Box
          className="flex items-start !pt-0 !pb-0 !pl-[51px] !pr-[54px] shrink-0"
          style={frameBoxStyle}
        >
          <Typography
            className="!m-0 relative z-[1] mq450:text-[19px] mq450:leading-[23px]"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", lineHeight: "29px" }}
          >
            {prop}
          </Typography>
        </Box>
        <Box className="flex items-start !pt-0 !pb-0 !pl-0 !pr-0 shrink-0 text-4xl">
          <Typography
            className="!mt-[-6px] !m-0 h-11 relative inline-block z-[1] mq450:text-[22px] mq750:text-[29px]"
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "600" }}
          >
            {pt}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BoardColumn;
