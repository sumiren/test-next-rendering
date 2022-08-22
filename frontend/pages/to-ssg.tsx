import type { NextPage } from "next";
import Link from "next/link";

const ToSSG: NextPage = () => {
  return <>
    <p>Scroll down to see Link, and test prefetch behavior</p>
    <div style={{marginTop: "2000px"}}>
      <Link href="/ssg">
        <a>Go to SSG</a>
      </Link>
    </div>
  </>;
};

export default ToSSG;
