import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CAHCPS</title>
        <meta
          name="description"
          content="College-wide Academic and Honors Cyber Profile System"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
