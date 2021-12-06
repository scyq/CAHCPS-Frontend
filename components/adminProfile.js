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

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  { field: "id", headerName: "序号", width: 90 },
  {
    field: "姓名",
    headerName: "姓名",
    width: 150,
    editable: true,
  },
  {
    field: "联系电话",
    headerName: "联系电话",
    width: 150,
    editable: true,
  },
  {
    field: "专业",
    headerName: "专业",
    width: 180,
    editable: true,
  },
];

const fourGrades = [
  {
    id: 0,
    profileFiles: "暂无",
  },
  {
    id: 1,
    profileFiles: "暂无",
  },
  {
    id: 2,
    profileFiles: "暂无",
  },
  {
    id: 3,
    profileFiles: "暂无",
  },
];

function TabPanel(props) {
  const state = useSharedData();
  const [pageSize, setPageSize] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const { children, value, index, item, ...other } = props;

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
            <Box>{item.profileFiles}</Box>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<DownloadIcon />}
            >
              下载文件
            </Button>
            <Button
              variant="contained"
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
          <Button
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={() => {
              state.setCurrentComponent("studentIndex");
            }}
          >
            查看详情
          </Button>
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
  const [value, setValue] = React.useState(0);

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
          <Tab label="210001 大一" {...a11yProps(0)} />
          <Tab label="200001 大二" {...a11yProps(1)} />
          <Tab label="190001 大三" {...a11yProps(2)} />
          <Tab label="180001 大四" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {fourGrades.map((item) => (
        <TabPanel
          key={item.id}
          value={value}
          index={item.id}
          item={item}
        ></TabPanel>
      ))}
    </Box>
  );
}
