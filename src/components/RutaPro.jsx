import { Navigate } from "react-router-dom";

function RutaPro({ proteger }) {
  let tokenAcceso = localStorage.getItem("token");
  return tokenAcceso ? proteger : <Navigate to="/Home" />;
}

export default RutaPro;
