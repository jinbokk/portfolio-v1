import Image from "next/image";
import styles from "./projects.module.css";
import Link from "next/link";
import ProjectGraph from "@/components/ProjectGraph";

export default function Projects() {
  return (
    <div>
      <h1>PROJECTS</h1>
      <h2>
        Here are the project logs showcasing my personal work over the course of
        about a year, as I pursued my goal of becoming a developer.
      </h2>

      <ProjectGraph />
    </div>
  );
}
