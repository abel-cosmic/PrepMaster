import Button from "@mui/material/Button";

export default function SigninButton({ text, padding }) {
  return (
    <Button
      variant="contained"
      style={{
        width: "fit-content",
        border: "solid 0.8px #2e2e2e",
        backgroundColor: "transparent",
        borderRadius: "0.3rem",
        padding: padding,
      }}
      disableElevation
      sx={{ textTransform: "none" }}
    >
      <p className="text-xs text-[#2e2e2e] font-medium"> {text} </p>{" "}
    </Button>
  );
}
