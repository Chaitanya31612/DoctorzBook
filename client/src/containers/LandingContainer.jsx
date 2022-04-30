import React from "react";
import Landing from "../components/Landing/Landing";

import MetaComponent from "../components/Meta/MetaComponent";
import metaData from "../seeds/metaData";

const LandingContainer = () => {
  return (
    <>
      <MetaComponent
        title={metaData.home.title}
        description={metaData.home.description}
        keywords={metaData.home.keywords}
      />
      <div className='container container--bg'>
        <Landing />
      </div>
    </>
  );
};

export default LandingContainer;
