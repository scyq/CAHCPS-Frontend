import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText } from "@mui/material";
import CommonTable from "./commonTable";

function TabPanel(props) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const titles = ["基本信息", "学籍信息", "联系信息", "奖惩信息"];
const basicInfoTags = [
  "姓名",
  "姓名拼音",
  "学号",
  "性别",
  "出生日期",
  "民族",
  "证件号码",
  "政治面貌",
  "入学日期",
  "生源地",
];

const academicRegistrationInfoTags = [
  "年级",
  "学院名称",
  "专业名称",
  "班级名称",
  "学制",
  "学籍状态",
  "是否在校",
  "报到注册状态",
  "学历层次",
  "培养方式",
  "培养层次",
];

const contactTags = [
  "电子邮箱",
  "手机号码",
  "固定电话",
  "家庭地址",
  "通讯地址",
];

let headIdSequence = [
  "year",
  "semester",
  "punishment",
  "punishmentDate",
  "type",
  "errorDate",
  "cancelDate",
  "cancelId",
  "cancelReason",
];

const punishmentTableHeads = [
  {
    id: "year",
    numeric: false,
    disablePadding: true,
    label: "学年",
  },
  {
    id: "semester",
    numeric: false,
    disablePadding: false,
    label: "学期",
  },
  {
    id: "punishment",
    numeric: false,
    disablePadding: true,
    label: "处分名称",
  },
  {
    id: "punishmentDate",
    numeric: false,
    disablePadding: true,
    label: "处分日期",
  },
  {
    id: "type",
    numeric: false,
    disablePadding: true,
    label: "违纪类别",
  },
  {
    id: "errorDate",
    numeric: false,
    disablePadding: true,
    label: "违纪日期",
  },
  {
    id: "cancelDate",
    numeric: false,
    disablePadding: true,
    label: "处分解除时间",
  },
  {
    id: "cancelId",
    numeric: false,
    disablePadding: true,
    label: "处分解除文号",
  },
  {
    id: "cancelReason",
    numeric: false,
    disablePadding: true,
    label: "处分解除原因",
  },
];

function getTabContent(index) {
  switch (index) {
    case 0:
      return (
        <List>
          {basicInfoTags.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>{item}： </ListItemText>
            </ListItem>
          ))}
        </List>
      );
    case 1:
      return (
        <List>
          {academicRegistrationInfoTags.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>{item}： </ListItemText>
            </ListItem>
          ))}
        </List>
      );
    case 2:
      return (
        <List>
          {contactTags.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>{item}： </ListItemText>
            </ListItem>
          ))}
        </List>
      );
    case 3:
      return (
        <CommonTable
          tableTitle={"处分情况"}
          heads={punishmentTableHeads}
          headIdSequence={headIdSequence}
          rows={[]}
        />
      );

    default:
      break;
  }
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

export default function BasicTabs() {
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
          {titles.map((item, index) => (
            <Tab key={index} label={item} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {titles.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {getTabContent(index)}
        </TabPanel>
      ))}
    </Box>
  );
}
