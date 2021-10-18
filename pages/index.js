import Head from "next/head";
import MainLayout from "../components/layout";
import { useSharedData } from "../context";
import Profile from "../components/profile";
import { Box } from "@mui/system";
import Index from "../components/index";
import Grades from "../components/grades";
import Awards from "../components/awards";
import Volunteerism from "../components/volunteerism";
import Language from "../components/language";

export default function Home() {
  const state = useSharedData();

  const getCurrentComponent = (index) => {
    switch (index) {
      case 0:
        return <Index />;
      case 1:
        return <Profile />;
      case 3:
        return <Grades />;
      case 4:
        return <Awards />;
      case 6:
        return <Volunteerism />;
      case 7:
        return <Language />;
      default:
        break;
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>CAHCPS</title>
        <meta
          name="description"
          content="College-wide Academic and Honors Cyber Profile System"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ marginTop: "50px" }}>
        {getCurrentComponent(state.currentComponent)}
      </Box>
    </MainLayout>
  );
}
