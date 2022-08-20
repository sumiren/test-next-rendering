import Link from "next/link";

export const Links = () => {
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <Link href="/ssr">
          <a>Go to SSR</a>
        </Link>
      </div>
      <div>
        <Link href="/ssg">
          <a>Go to SSG</a>
        </Link>
      </div>
      <div>
        <Link href="/static">
          <a>Go to Static</a>
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link href="/">
          <a>Go to top</a>
        </Link>
      </div>
    </>
  );
};
