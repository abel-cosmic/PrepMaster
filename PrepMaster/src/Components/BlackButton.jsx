import Button from "@mui/material/Button";

export default function BlackButton() {
  return (
    <Button
      variant="contained"
      style={{
        width: "fit-content",
        backgroundColor: "#2E2E2E",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius:"0.5rem",
        padding:"0.9rem 2.3rem"
      }}
      disableElevation
      sx={{ textTransform: "none" }}
    >
      <p className="text-xs text-white">Send</p>{" "}
    </Button>
  );
}