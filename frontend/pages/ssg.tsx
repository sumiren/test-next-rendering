import type { GetStaticProps, NextPage } from "next";
import { Links } from "../components/links";

interface Props {
  builtDate: string;
}

const SSG: NextPage<Props> = ({ builtDate }) => {
  return (
    <>
      {`[SSG] builtDate... ${builtDate}`}
      <Links />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const builtDate = new Date();
  return {
    props: {
      builtDate: builtDate.toString(),
    },
  };
};

export default SSG;
