import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2020-2021 国家奖学金",
    author: "国家级",
  },
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2020-2021 北京工业大学创新创业奖",
    author: "校级",
  },
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2020-2021 北京工业大学学习优秀奖",
    author: "校级",
  },
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2020-2021 北京工业大学三好学生",
    author: "校级",
  },
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2019-2020 北京工业大学三好学生",
    author: "校级",
  },
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2019-2020 IEEE Xtreme极限编程挑战赛国际二等奖",
    author: "国际级",
  },
  {
    img: "https://img.ixintu.com/download/jpg/202003/1d3e303d223acbf1b40095ff63cd9a9a_800_570.jpg!con",
    title: "2019-2020 美国大学生数学建模大赛H奖",
    author: "国际级",
  },
];

export default function Awards() {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">获奖证书一览</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
