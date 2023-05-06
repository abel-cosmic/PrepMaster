import Logo from "./assets/Logo.png";
import Button from "@mui/material/Button";
import plus from "./assets/plus.png";
import { useEffect, useState } from "react";
import minus from "./assets/minus.png";

export default function Navigation() {
  const [showFAQBtn, setshowFAQBtn] = useState(plus);

  const handleAdd = () => {
    showFAQBtn === plus ? setshowFAQBtn(minus) : setshowFAQBtn(plus);
  };

  const services = [
    {
      img: "abc",
      headerText: "abc",
      subText: "abc",
    },
    {
      img: "abc",
      headerText: "abc",
      subText: "abc",
    },
    {
      img: "abc",
      headerText: "abc",
      subText: "abc",
    },
  ];
  const CreateServices = () => {
    return services.map((service) => {
      return (
        <div className="card">
          <p>{service.img}</p>
          <p>{service.headerText}</p>
          <p>{service.subText}</p>
        </div>
      );
    });
  };
  return (
    <div className="mt-16 flex flex-row justify-evenly" id="Nav-holder">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="btn-container flex flex-row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <img src={showFAQBtn} alt="" onClick={handleAdd} />
      </div>
      <CreateServices />
    </div>
  );
}
// Please delete the navigation component after u understand the code and create your own navigation component
