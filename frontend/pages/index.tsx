import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return <>
    <div>
      <Link href="/to-ssr">
        <a>Test SSR</a>
      </Link>
    </div>
    <div>
      <Link href="/to-ssg">
        <a>Test SSG</a>
      </Link>
    </div>
    <div>
      <Link href="/to-static">
        <a>Test Static</a>
      </Link>
    </div>
  </>;
};

export default Home;
