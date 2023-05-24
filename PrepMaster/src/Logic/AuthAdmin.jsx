export default function AuthAdmin({ email, password }) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/admins/1", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((teachers) => {
        const valid =
          teachers.email === email && teachers.password === password;
        resolve(valid); // Resolve the promise with the authentication result
      })
      .catch((err) => {
        console.error(err);
        reject(err); // Reject the promise if there's an error
      });
  });
}
