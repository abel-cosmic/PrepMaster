import CustomButton from "../Components/CustomButton";
export function Footer(){
    return (
        <div className="flex flex-row w-full justify-between items-center py-2 px-48">
            <div>PrepMasters © 2023 All rights reserved</div>
            <CustomButton text={"Send"} padding={"0.7rem 2.3rem"} />
        </div>
    );
}