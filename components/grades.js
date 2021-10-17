import CommonTable from "./commonTable";

const gradesHead = [
  {
    id: "学年",
    numeric: false,
    disablePadding: true,
    label: "学年",
  },
  {
    id: "学期",
    numeric: false,
    disablePadding: false,
    label: "学期",
  },
  {
    id: "课程代码",
    numeric: false,
    disablePadding: false,
    label: "课程代码",
  },
  {
    id: "课程名称",
    numeric: false,
    disablePadding: false,
    label: "课程名称",
  },
  {
    id: "课程性质",
    numeric: false,
    disablePadding: false,
    label: "课程性质",
  },
  {
    id: "学分",
    numeric: false,
    disablePadding: false,
    label: "学分",
  },
  {
    id: "成绩",
    numeric: false,
    disablePadding: false,
    label: "成绩",
  },
  {
    id: "绩点",
    numeric: false,
    disablePadding: false,
    label: "绩点",
  },
  {
    id: "开课学院",
    numeric: false,
    disablePadding: false,
    label: "开课学院",
  },
  {
    id: "课程标记",
    numeric: false,
    disablePadding: false,
    label: "课程标记",
  },
  {
    id: "课程归属",
    numeric: false,
    disablePadding: false,
    label: "课程归属",
  },
  {
    id: "任课老师",
    numeric: false,
    disablePadding: false,
    label: "任课老师",
  },
  {
    id: "考核方式",
    numeric: false,
    disablePadding: false,
    label: "考核方式",
  },
  {
    id: "学分绩点",
    numeric: false,
    disablePadding: false,
    label: "学分绩点",
  },
];

export default function Grades() {
  return <CommonTable heads={gradesHead} title={"学生成绩查询"} />;
}
