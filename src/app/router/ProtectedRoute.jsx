import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  // const userType = localStorage.getItem("tms_user_type");

  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default ProtectedRoute;