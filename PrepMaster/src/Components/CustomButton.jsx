import Button from "@mui/material/Button";

export default function CustomButton({ text, padding }) {
    return ( <
        Button variant = "contained"
        style = {
            {
                width: "fit-content",
                backgroundColor: "#088395",
                borderRadius: "0.3rem",
                padding: padding,
            }
        }
        disableElevation sx = {
            { textTransform: "none" } } >
        <
        p className = "text-xs text-white" > { text } < /p> <
        /Button>
    );
}