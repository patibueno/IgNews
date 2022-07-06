import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>24 março</time>
            <strong>Crating an application</strong>
            <p>Easy to create an application</p>
          </a>
          <a href="#">
            <time>24 março</time>
            <strong>Crating an application</strong>
            <p>Easy to create an application</p>
          </a>
          <a href="#">
            <time>24 março</time>
            <strong>Crating an application</strong>
            <p>Easy to create an application</p>
          </a>
        </div>
      </main>
    </>
  );
}
