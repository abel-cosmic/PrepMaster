export default function CreateAdmin({ email, organization, password }) {
  return new Promise((resolve, reject) => {
    console.log(email, organization, password);
    fetch("http://localhost:8080/api/admins", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, organization, password }),
    })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp.errors);
        resolve(resp);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
