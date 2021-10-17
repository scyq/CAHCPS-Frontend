import "../styles/globals.css";
import { DataWrapper } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <DataWrapper>
      <Component {...pageProps} />
    </DataWrapper>
  );
}

export default MyApp;
