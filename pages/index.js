import { Box } from "@mui/system";
import style from "../styles/index.module.css";
import Background from "../components/backgroundImage";
import { Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useRouter } from "next/router";
import { betterFetch } from "../network";

export default function Index() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const widgetSX = {
    m: 1,
    flex: 1,
  };

  return (
    <>
      <Background />
      <Box className={style.mainBlock}>
        <Box className={style.loginBlock}>
          <Typography
            className={style.loginLine}
            variant="h4"
            noWrap
            component="div"
          >
            樊恭烋荣誉学院学生成长画像系统
          </Typography>
          <Stack
            className={style.loginLine}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <Typography variant="h6">账号</Typography>
            <TextField
              id="outlined-basic"
              label="用户名"
              variant="outlined"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              sx={widgetSX}
            />
          </Stack>
          <Stack
            className={style.loginLine}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <Typography variant="h6">密码</Typography>
            <FormControl sx={widgetSX} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                密码
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>
          <Button
            sx={{ width: "50ch", height: "60px" }}
            variant="contained"
            className={style.loginLine}
            onClick={async () => {
              let res = await betterFetch(
                "/user/login",
                "PUT",
                {},
                {
                  email_or_student_id: username,
                  password: password,
                }
              );
              if (res.status === "ok") {
                localStorage.setItem("token", res.token);
                router.push("/main");
              }
            }}
          >
            登录
          </Button>
        </Box>
      </Box>
    </>
  );
}
