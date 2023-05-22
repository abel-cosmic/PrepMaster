import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Close from "../../assets/Close.svg";
import { Button } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  filter: "drop-shadow(10px 0px 40px rgba(46, 46, 46, 0.1))",
};

export default function IncorrectAnswer({
  open,
  onClose,
  answer,
  description,
}) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="flex flex-col gap-4">
        <div className="exam-sheet flex flex-row justify-between px-6 py-4">
          <p className="text-lg font-semibold">Incorrect Answer</p>
          <Button onClick={handleClose}>
            <img src={Close} alt="close" />
          </Button>
        </div>
        <div className="px-6 pb-6 flex flex-col gap-6">
          <p className="text-lg font-medium opacity-50">The correct answer :</p>
          <p>{answer}</p>
          <p className="text-lg font-medium opacity-50">Descritption</p>
          <p>{description}</p>
        </div>
      </Box>
    </Modal>
  );
}
