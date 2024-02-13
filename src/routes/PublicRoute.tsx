import React from "react";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { user } = useAuth();
  console.log(user);

  if(user){
    return <Navigate to='/' replace={true}/>;
  }

  return <div>PublicRoute</div>;
};

export default PublicRoute;
