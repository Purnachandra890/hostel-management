// import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { currentRole } = useSelector(state => state.user);

  console.log("Current Role:", currentRole);
  console.log("Allowed Role:", allowedRole);

  if (currentRole === allowedRole) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
