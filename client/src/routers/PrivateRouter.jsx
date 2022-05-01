import React from 'react'
import {Link, Redirect} from 'react-router-dom';
const PrivateRouter = ({ user, redirectPath = '/login',childern }) => {
    if (!user) {
      return <Redirect to={redirectPath}/>;
    }
    return childern
};

export default PrivateRouter;