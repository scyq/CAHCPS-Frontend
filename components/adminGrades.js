import { Box } from "@mui/system";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const fourGrades = [
  {
    index: 1,
    id: "210001 大一",
    population: 50,
    was: 89.5,
    gpa: 3.96,
  },
  {
    index: 2,
    id: "200001 大二",
    population: 30,
    was: 87.1,
    gpa: 3.92,
  },
  { index: 3, id: "190001 大三", population: 30, was: 90.2, gpa: 3.96 },
  { index: 4, id: "180001 大四", population: 27, was: 89.4, gpa: 3.94 },
];

function ClassCard(item) {
  return (
    <Card sx={{ maxWidth: 500, padding: "30px" }} onClick={() => {}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`/FGH${item.index}.png`}
          alt="badge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            班级人数 {item.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            加权平均分 {item.was}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            平均GPA {item.gpa}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function AdminGrades() {
  return (
    <Box sx={{ width: "100%", height: "100%", marginTop: "70px" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {fourGrades.map((item) => (
          <Grid
            key={item.index}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={6}
          >
            {ClassCard(item)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
