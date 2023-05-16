import CustomButton from "../Components/CustomButton";
export function Footer(){
    return (
        <div className="flex flex-row w-full justify-between px-48">
            <div>PrepMasters © 2023 All rights reserved</div>
            <CustomButton text={"Send"} padding={"0.7rem 1.7rem"} />
        </div>
    );
}