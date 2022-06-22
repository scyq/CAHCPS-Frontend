import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Papa from "papaparse";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from "@mui/x-data-grid";
import { useSharedData } from "../context";
import { betterFetch } from "../network";
import { useRouter } from "next/router";

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  { field: "id", headerName: "序号", width: 90 },
  { field: "学号", headerName: "学号", width: 150 },
  {
    field: "姓名",
    headerName: "姓名",
    width: 150,
    editable: true,
  },
  { field: "性别", headerName: "性别", width: 90 },
  { field: "民族", headerName: "民族", width: 100 },
  { field: "生源地", headerName: "生源地", width: 150 },
  { field: "出生日期", headerName: "出生日期", width: 150 },
  {
    field: "专业",
    headerName: "专业",
    width: 180,
  },
  { field: "班级", headerName: "班级", width: 150 },
  { field: "籍贯", headerName: "籍贯", width: 150 },
  {
    field: "联系电话",
    headerName: "联系电话",
    width: 150,
  },
  {
    field: "E-mail",
    headerName: "E-mail",
    width: 150,
  },
  {
    field: "宿舍楼",
    headerName: "宿舍楼",
    width: 150,
  },
  {
    field: "宿舍号",
    headerName: "宿舍号",
    width: 150,
  },
  {
    field: "校级职务",
    headerName: "校级职务",
    width: 150,
  },
  {
    field: "班内职务",
    headerName: "班内职务",
    width: 150,
  },
];

function TabPanel(props) {
  const state = useSharedData();
  const [pageSize, setPageSize] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<DownloadIcon />}
            >
              下载文件
            </Button>
            <Button
              variant="contained"
              color="success"
              endIcon={<FileUploadIcon />}
              component="label"
            >
              <input
                type="file"
                hidden
                accept=".csv"
                onChange={(event) => {
                  let file = event.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = ({ target }) => {
                    const csv = Papa.parse(target.result, { header: true });
                    console.log(csv);
                    setRows(csv.data);
                  };
                  reader.readAsText(file);
                }}
              />
              编辑上传
            </Button>
          </Stack>
          <Box sx={{ marginTop: "30px", height: "60vh" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pagination
              rowsPerPageOptions={[5, 25, 30, 50]}
              checkboxSelection
              disableSelectionOnClick
              components={{
                Toolbar: CustomToolbar,
              }}
            />
          </Box>
          <Stack sx={{ marginTop: "10px" }} direction="row" spacing={3}>
            <Button
              variant="contained"
              onClick={() => {
                state.setCurrentComponent("studentIndex");
              }}
            >
              查看详情
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                props.generateReport();
              }}
            >
              生成报告
            </Button>
          </Stack>

          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminProfile() {
  const router = useRouter();

  const [classes, setClasses] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const fetchClasses = async () => {
    const res = await betterFetch("/admin/classes", "GET", {
      token: localStorage.getItem("token"),
    });
    if (res.status === "ok") {
      let _classes = res["student_list"];
      console.log(_classes);
      setClasses(_classes);
    }
  };

  React.useEffect(() => {
    fetchClasses();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {classes.map((item, index) => (
            <Tab
              label={item.name}
              key={item["class_id"]}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {classes.map((item, index) => (
        <TabPanel
          key={item["class_id"]}
          value={value}
          index={index}
          item={item}
          generateReport={() => {
            router.push("/report");
          }}
        ></TabPanel>
      ))}
    </Box>
  );
}
