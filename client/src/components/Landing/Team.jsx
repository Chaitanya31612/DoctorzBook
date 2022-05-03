import React from "react";
import styles from "./team.module.scss";
import FluidCard from "./FluidCard";
import teamData from "../../seeds/teamData";

function Team() {
  return (
    <div className={styles.Team} id="home_team">
      <br />
      <h1 className={"heading heading--primary center-content"}>
        <span className="highlight">Our Team</span>
      </h1>
      <br />
      <br />
      <div className={styles.projectMaintainers}>
        {teamData.map((item, index) => (
          <FluidCard content={item} key={index} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Team;
