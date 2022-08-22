import type { NextPage } from "next";
import Link from "next/link";

const ToStatic: NextPage = () => {
  return <>
    <p>Scroll down to see Link, and test prefetch behavior</p>
    <div style={{marginTop: "2000px"}}>
      <Link href="/static">
        <a>Go to Static</a>
      </Link>
    </div>
  </>;
};

export default ToStatic;
