import { Alert, Snackbar } from "@mui/material";
import "./snackBarAlert.css";
import { useAppContext } from "../../context/myContext";

const SnackBarAlert = () => {
  const { snackBarMessage, snackBarState, snackBarType, updateSnackBarState } =
    useAppContext();
  const handleClose = () => {
    updateSnackBarState(false);
  };

  const snackBarTypeFunc = () => {
    if (snackBarType === "error") {
      return "error";
    } else if (snackBarType === "success") {
      return "success";
    } else if (snackBarType === "info") {
      return "info";
    } else if (snackBarType === "warning") {
      return "warning";
    }
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackBarState}
      autoHideDuration={3000}
      sx={{ width: 400 }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackBarTypeFunc()}
        sx={{ width: "100%" }}
      >
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarAlert;
