import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DownloadIcon from "@mui/icons-material/Download";

const testExams = [
  {
    type: "大学英语四级",
    score: 575,
  },
  {
    type: "大学英语六级",
    score: 564,
  },
  {
    type: "雅思",
    score: 7.5,
  },
  {
    type: "GRE",
    score: 330,
  },
];

function languageCertification(certifications) {
  return certifications.map((item, index) => (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="download">
          <DownloadIcon />
        </IconButton>
      }
      key={index}
    >
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.type} secondary={item.score} />
    </ListItem>
  ));
}

export default function Language() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          语言考试证明
        </Typography>
        <List>{languageCertification(testExams)}</List>
      </Grid>
    </Box>
  );
}
