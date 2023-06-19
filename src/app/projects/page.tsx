import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";
import ProjectGraph from "../Components/ProjectGraph";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>PROJECTS</h2>
      <h3>
        Here are the project logs showcasing my personal work over the course of
        about a year, as I pursued my goal of becoming a developer.
      </h3>

      <ProjectGraph />
    </div>
  );
}
