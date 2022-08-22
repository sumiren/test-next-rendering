import Link from "next/link";

export const Links = () => {
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <Link href="/" prefetch={false}>
          <a>Go to top</a>
        </Link>
      </div>
    </>
  );
};
