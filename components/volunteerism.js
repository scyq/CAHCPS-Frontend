import { Box } from "@mui/system";
import ReactECharts from "echarts-for-react";

const colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
const bgColor = "#2E2733";
const itemStyle = {
  star5: {
    color: colors[0],
  },
  star4: {
    color: colors[1],
  },
  star3: {
    color: colors[2],
  },
  star2: {
    color: colors[3],
  },
};
const data = [
  {
    name: "校外",
    itemStyle: {
      color: colors[1],
    },
    children: [
      {
        name: "社区",
        children: [
          {
            name: "5小时",
            children: [
              {
                name: "社区服务A",
              },
              {
                name: "社区服务B",
              },
              {
                name: "社区服务C",
              },
            ],
          },
          {
            name: "4小时",
            children: [
              {
                name: "社区服务1",
              },
              {
                name: "社区服务2",
              },
              {
                name: "社区服务3",
              },
            ],
          },
          {
            name: "3小时",
            children: [
              {
                name: "社区服务alpha",
              },
            ],
          },
        ],
      },
      {
        name: "街道",
        children: [
          {
            name: "5小时",
            children: [
              {
                name: "街道服务A",
              },
            ],
          },
          {
            name: "4小时",
            children: [
              {
                name: "街道服务B",
              },
              {
                name: "街道服务C",
              },
            ],
          },
          {
            name: "3小时",
            children: [
              {
                name: "街道服务D",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "校内",
    itemStyle: {
      color: colors[2],
    },
    children: [
      {
        name: "学院",
        children: [
          {
            name: "5小时",
            children: [
              {
                name: "学院服务A",
              },
            ],
          },
          {
            name: "4小时",
            children: [
              {
                name: "学院服务B",
              },
              {
                name: "学院服务C",
              },
            ],
          },
          {
            name: "3小时",
            children: [
              {
                name: "学院服务D",
              },
            ],
          },
        ],
      },
      {
        name: "国际交流处",
        children: [
          {
            name: "5小时",
            children: [
              {
                name: "国际服务A",
              },
            ],
          },
          {
            name: "4小时",
            children: [
              {
                name: "国际服务B",
              },
              {
                name: "国际服务C",
              },
              {
                name: "国际服务D",
              },
            ],
          },
          {
            name: "3小时",
            children: [
              {
                name: "国际服务E",
              },
            ],
          },
        ],
      },
      {
        name: "学生会",
        children: [
          {
            name: "5小时",
            children: [
              {
                name: "学生会A",
              },
            ],
          },
          {
            name: "4小时",
            children: [
              {
                name: "学生会B",
              },
              {
                name: "学生会C",
              },
            ],
          },
          {
            name: "2小时",
            children: [
              {
                name: "学生会D",
              },
            ],
          },
        ],
      },
      {
        name: "校团委",
        children: [
          {
            name: "4小时",
            children: [
              {
                name: "校团委A",
              },
              {
                name: "校团委B",
              },
              {
                name: "校团委C",
              },
            ],
          },
        ],
      },
      {
        name: "图书馆",
        children: [
          {
            name: "5小时",
            children: [
              {
                name: "图书馆A",
              },
            ],
          },
          {
            name: "4小时",
            children: [
              {
                name: "图书馆B",
              },
            ],
          },
        ],
      },
    ],
  },
];

for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case "5小时":
            bookScoreId = 0;
            return itemStyle.star5;
          case "4小时":
            bookScoreId = 1;
            return itemStyle.star4;
          case "3小时":
            bookScoreId = 2;
            return itemStyle.star3;
          case "2小时":
            bookScoreId = 3;
            return itemStyle.star2;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5,
        },
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color,
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color,
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value,
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color,
    };
  }
}
const option = {
  backgroundColor: bgColor,
  color: colors,
  series: [
    {
      type: "sunburst",
      center: ["50%", "48%"],
      data: data,
      sort: function (a, b) {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: "radial",
        color: bgColor,
      },
      itemStyle: {
        borderColor: bgColor,
        borderWidth: 2,
      },
      levels: [
        {},
        {
          r0: 0,
          r: 40,
          label: {
            rotate: 0,
          },
        },
        {
          r0: 40,
          r: 105,
        },
        {
          r0: 115,
          r: 140,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: colors[2],
            color: "transparent",
          },
          label: {
            rotate: "tangential",
            fontSize: 10,
            color: colors[0],
          },
        },
        {
          r0: 140,
          r: 145,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0],
          },
          label: {
            position: "outside",
            textShadowBlur: 5,
            textShadowColor: "#333",
          },
          downplay: {
            label: {
              opacity: 0.5,
            },
          },
        },
      ],
    },
  ],
};

export default function Volunteerism() {
  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: bgColor }}>
      <ReactECharts option={option} style={{ height: 800, width: 800 }} />
    </Box>
  );
}
