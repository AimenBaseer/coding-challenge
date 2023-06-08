import * as React from "react";
import Alert from "@mui/material/Alert";

interface Props {
  isOpen: boolean;
  text: string;
}
const Alerts: React.FunctionComponent<Props> = ({ isOpen, text }) => {
  return (
    <>
      {isOpen ? (
        <Alert variant="outlined" severity="error">
          {text}
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alerts;
