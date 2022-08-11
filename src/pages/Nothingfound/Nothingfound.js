import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Nothingfound() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <>
      <h1>Opps. Something's gone wrong! Please try again later...</h1>
      <Button variant="contained" onClick={goBack}>
        Back to Home page
      </Button>
    </>
  );
}

export default Nothingfound;
