import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PDF from "../components/pdf";

const category = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
  animation: false,
};

export default function Report() {
  const router = useRouter();
  const [echarts, setEcharts] = useState({});
  const [base64s, setBase64s] = useState({});
  const [echartsDisplay, setEchartDisplay] = useState("");

  useEffect(() => {
    const echartInstance = echarts.test.getEchartsInstance();
    const base64 = echartInstance.getDataURL();
    let temp = base64s;
    temp.test = base64;
    setBase64s(temp);
    setEchartDisplay("none");
    ReactDOM.render(
      <PDF images={base64s} />,
      document.getElementById("renderPDF")
    );
  }, []);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          返回
        </Button>
        <ReactECharts
          ref={(e) => {
            let temp = echarts;
            echarts.test = e;
            setEcharts(temp);
          }}
          option={category}
          style={{ display: echartsDisplay }}
        />
      </Box>
      <div id="renderPDF" style={{ flex: 1 }}></div>
      <div></div>
    </Box>
  );
}
