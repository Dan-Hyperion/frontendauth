import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault()
    const userDetail = {
      firstName,
      lastName,
      email,
      password,
    };
    const response = await fetch("https://backendauth-duaj.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetail),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleRegistration}>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        name="firstName"
        placeholder="First Name"
        className="border-2 outline-1"
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="border-2 outline-1"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="email"
        className="border-2 outline-1"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password"
        className="border-2 outline-1"
      />
      <button>Submit</button>
    </form>
  );
};

export default Register;
