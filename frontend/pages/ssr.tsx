import type { GetServerSideProps, NextPage } from "next";
import { Links } from "../components/links";

interface Props {
  requestedDate: string;
}

const SSR: NextPage<Props> = ({ requestedDate }) => {
  return (
    <>
      {`[SSR] requestedDate... ${requestedDate}`}
      <Links />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const requestedDate = new Date();
  return {
    props: {
      requestedDate: requestedDate.toString(),
    },
  };
};

export default SSR;
