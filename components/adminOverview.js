import { Box } from "@mui/system";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

export default function AdminOverview() {
  const [chartOption, setChartOption] = useState([]);
  const [toShow, setToShow] = useState(false);

  const init = async () => {
    const res = await fetch("/api/dynamic");
    let dynamics = await res.json();
    dynamics = dynamics.map((item, index) => {
      if (index !== 0) {
        item[4] = (item[4] - 1800) / 5;
      }
      return item;
    });
    let datasetWithFilters = [];
    let seriesList = [];
    const countries = [
      "郑泰祺",
      "吴思宇",
      "陈宇卿",
      "曹铭慧",
      "吴天鹤",
      "陈冰",
      "丛熙平",
      "李亚欧",
    ];
    countries.forEach((country) => {
      let datasetId = "dataset_" + country;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: "dataset_raw",
        transform: {
          type: "filter",
          config: {
            and: [
              { dimension: "Year", gte: 0 },
              { dimension: "Country", "=": country },
            ],
          },
        },
      });
      seriesList.push({
        type: "line",
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: function (params) {
            return params.value[3] + ": " + params.value[0];
          },
        },
        labelLayout: {
          moveOverlap: "shiftY",
        },
        emphasis: {
          focus: "series",
        },
        encode: {
          x: "Year",
          y: "Income",
          label: ["Country", "Income"],
          itemName: "Year",
          tooltip: ["Income"],
        },
      });
    });
    setChartOption({
      animation: true,
      animationDuration: 1000,
      dataset: [
        {
          id: "dataset_raw",
          source: dynamics,
        },
        ...datasetWithFilters,
      ],
      title: {
        text: "180001班 学生成长曲线",
      },
      tooltip: {
        order: "valueDesc",
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        nameLocation: "middle",
      },
      yAxis: {
        name: "综合评分",
      },
      grid: {
        right: 140,
      },
      series: seriesList,
    });
    setToShow(true);
  };

  useEffect(() => {
    init();
  });

  return (
    <Box sx={{ height: "500px" }}>
      {toShow && <ReactECharts option={chartOption} style={{ height: 600 }} />}
    </Box>
  );
}
