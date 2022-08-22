import type { NextPage } from "next";
import Link from "next/link";

const ToSSR: NextPage = () => {
  return <>
    <p>Scroll down to see Link, and test prefetch behavior</p>
    <div style={{marginTop: "2000px"}}>
      <Link href="/ssr">
        <a>Go to SSR</a>
      </Link>
    </div>
  </>;
};

export default ToSSR;
