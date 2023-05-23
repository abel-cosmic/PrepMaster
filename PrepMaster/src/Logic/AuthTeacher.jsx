export default function AuthTeacher({ email, password }) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/teachers", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((teachers) => {
        const valid = teachers.some(
          (teacher) => teacher.email === email && teacher.password === password
        );
        resolve(valid); // Resolve the promise with the authentication result
      })
      .catch((err) => {
        console.error(err);
        reject(err); // Reject the promise if there's an error
      });
  });
}
