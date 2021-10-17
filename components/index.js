import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ReactECharts from "echarts-for-react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import FlagIcon from "@mui/icons-material/Flag";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const option = {
  title: {
    text: "学生画像",
    subtext: "四年成长经历",
  },
  tooltip: {},
  legend: {
    data: ["大一", "大二", "大三", "大四"],
    bottom: 0,
  },
  radar: {
    center: ["50%", "50%"],
    // shape: 'circle',
    indicator: [
      { name: "加权平均分", max: 100 },
      { name: "竞赛获奖", max: 100 },
      { name: "科研项目", max: 100 },
      { name: "思想政治", max: 100 },
      { name: "学生工作", max: 100 },
      { name: "社区服务", max: 100 },
    ],
    name: {
      textStyle: {
        color: "#000000",
      },
    },
  },
  series: [
    {
      name: "学生画像",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [10, 13, 14, 15, 16, 17],
          name: "大一",
        },
        {
          value: [33, 35, 37, 36, 31, 32],
          name: "大二",
        },
        {
          value: [58, 51, 52, 57, 54, 53],
          name: "大三",
        },
        {
          value: [72, 75, 70, 85, 84, 87],
          name: "大四",
        },
      ],
    },
  ],
};

const honors = [
  {
    honor: "北京工业大学学习优秀奖",
    level: "校级",
    levelIndex: 3,
    time: "2020.12.04",
  },
  {
    honor: "北京工业大三好学生",
    level: "校级",
    levelIndex: 3,
    time: "2020.12.04",
  },
  {
    honor: "北京市三好学生",
    level: "省市级",
    levelIndex: 2,
    time: "2021.04.29",
  },
  {
    honor: "国家奖学金",
    level: "国家级",
    levelIndex: 1,
    time: "2021.10.01",
  },
];

/**
 * 0 - 国际级
 * 1 - 国家级
 * 2 - 省市级
 * 3 - 校级
 */
function getLevelIcon(level) {
  switch (level) {
    case 0:
      return <PublicIcon />;
    case 1:
      return <FlagIcon />;
    case 2:
      return <LocationCityIcon />;
    case 3:
      return <SchoolIcon />;

    default:
      break;
  }
}

function HonorTimeLine() {
  return (
    <Timeline position="alternate">
      {honors.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color={index & 1 ? "primary" : "secondary"}
              variant="outlined"
            >
              {getLevelIcon(item.levelIndex)}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.honor}
            </Typography>
            <Typography>{item.level}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default function Index() {
  return (
    <Box sx={{ marginTop: "80px" }}>
      <Stack direction="row" spacing={8}>
        <Box>
          <ReactECharts option={option} style={{ height: 500, width: 500 }} />
        </Box>
        <Box sx={{ minWidth: "40vw" }}>
          <HonorTimeLine />
        </Box>
      </Stack>
    </Box>
  );
}
