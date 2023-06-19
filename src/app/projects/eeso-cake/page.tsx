import Image from "next/image";
import styles from "./eeso-cake.module.css";

import { GetServerSideProps } from "next";

const page = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="/portfolio_eesocake.png"
          alt="eeso-cake"
          width={800}
          height={800}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default page;
