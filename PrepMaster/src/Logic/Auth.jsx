export default function Auth({ email, password }) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/students", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((students) => {
        const valid = students.some(
          (student) => student.email === email && student.password === password
        );
        resolve(valid); // Resolve the promise with the authentication result
      })
      .catch((err) => {
        console.error(err);
        reject(err); // Reject the promise if there's an error
      });
  });
}
