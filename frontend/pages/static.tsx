import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Links } from "../components/links";

const Static: NextPage = () => {
  return (
    <div>
      static
      <Links />
    </div>
  );
};

export default Static;
