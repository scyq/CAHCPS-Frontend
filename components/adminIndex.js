import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { betterFetch } from "../network";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const heads = [
  { text: "序号" },
  { text: "班号" },
  { text: "辅导员" },
  { text: "学生人数" },
  { text: "备注" },
];

export default function AdminIndex() {
  const [newClass, setNewClass] = useState("");
  const [classes, setClasses] = useState([]);

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

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <Box>
      <Stack sx={{ margin: "60px 0 20px 0" }} direction="row" spacing={3}>
        <TextField
          label="新建班级名称"
          variant="outlined"
          value={newClass}
          onChange={(e) => {
            setNewClass(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={async () => {
            if (newClass.length < 2) {
              alert("请正确输入班级名称");
            }
            const res = await betterFetch(
              "/admin/classes",
              "POST",
              { token: localStorage.getItem("token") },
              {
                name: newClass,
              }
            );
            if (res.status === "ok") {
              fetchClasses();
            }
          }}
        >
          新建班级
        </Button>
      </Stack>
      <Box sx={{ height: "60vh" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {heads.map((item, index) => (
                  <TableCell key={index}>{item.text}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {classes.map((_class) => (
                <TableRow
                  key={_class.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {_class["class_id"]}
                  </TableCell>
                  <TableCell>{_class.name}</TableCell>
                  <TableCell>辅导员</TableCell>
                  <TableCell>{_class["student_count"]}</TableCell>
                  <TableCell>
                    {_class.note === "" ? "无" : _class.note}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
