import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LogoutIcon from "../assets/LogoutIcon.svg";
import CustomButton from "../Components/CustomButton";
import LandingPage from "../LandingPage/LandingPage";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  px: 2,
  py: 6,
  filter: "drop-shadow(10px 0px 40px rgba(46, 46, 46, 0.1))",
};

export default function Logout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "1rem",
          fontWeight: "400",
        }}
        onClick={handleOpen}
      >
        <div className="side-bar text-md" id="Logout">
          <img src={LogoutIcon} alt="Logout Icon" />
          <p>Logout</p>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col gap-6">
          <p className="text-2xl font-medium flex justify-center">
            Logging out?
          </p>
          <p className="opacity-50 flex justify-center">
            You are about to leave PrepMaster, are you sure?
          </p>
          <div className="flex flex-row gap-10 justify-center">
            <Button
              variant="text"
              sx={{ textTransform: "none", fontWeight: "500" }}
            >
              <p>Cancel</p>
            </Button>
            <NavLink to="/" element={<LandingPage />}>
              <CustomButton text={"Logout"} padding={"0.5rem 2rem"} />
            </NavLink>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
