export default function UpdateStudent({
  id,
  firstName,
  lastName,
  email,
  password,
  gender,
  phoneNumber,
  departmentId,
}) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/students", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student: {
          id,
          firstName,
          lastName,
          email,
          phoneNumber,
          gender,
          password,
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
