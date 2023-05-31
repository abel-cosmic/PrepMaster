import { useEffect } from "react";

export default function CreateTeacher({
  firstName,
  lastName,
  departmentId,
  email,
  password,
  phoneNumber,
  gender,
}) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/teachers", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teacher: {
          firstName,
          lastName,
          email,
          phoneNumber,
          gender,
          password,
          departmentHead: false,
        },
        departmentId,
      }),
    })
      .then((response) => {
        if (response.headers.get("content-length") === "0") {
          // Handle empty response
          resolve();
        } else {
          return response.json();
        }
      })
      .then((resp) => {
        if (resp && resp.errors) {
          console.log(resp.errors);
          reject(resp.errors);
        } else {
          console.log(resp);
          resolve(resp);
        }
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
