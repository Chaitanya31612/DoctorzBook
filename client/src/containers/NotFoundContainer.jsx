import React, { useEffect } from "react";
import MetaComponent from "../components/Meta/MetaComponent";
import metaData from "../seeds/metaData";

import NotFoundLogo from "../assets/images/404.png";
import { Link } from "react-router-dom";

const NotFoundContainer = () => {
  const getFaviconEl = () => {
    return document.getElementById("favicon");
  };

  useEffect(() => {
    const favicon = getFaviconEl();
    favicon.href = "404browser_102160.png";
  }, []);

  return (
    <>
      <MetaComponent
        title={metaData.notFound.title}
        description={metaData.notFound.description}
        keywords={metaData.notFound.keywords}
      />
      <div className='notfound'>
        <img className='notfound__logo' src={NotFoundLogo} alt='' />
        <div className='notfound__content'>
          <h1 className='heading heading--extrabig gradient-text'>
            Ohh No! That's a 404 Page.
          </h1>
          <p className='notfound__content-text'>
            The page you are looking for does not exist.
          </p>
          <Link to='/'>
            <button
              className='button button--primary notfound__content-button'
              style={{ fontSize: "1.7rem" }}
            >
              Let me take you Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundContainer;
