"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSignup = async () => {
    try {
    let data ={
      username:username,
      email:email,
      password:password
    }
    console.log("data",data);
      axios.post("/api/users/signup", data);
      console.log("Signup successful",username,password);
      setEmail("");setUsername("");setPassword("");
    } catch (err) {
      console.log("Error",err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h2 className=" px-4 py-8">Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg px-4 py-2 text-black"
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-lg px-4 py-2 text-black"
      />
      <br />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="rounded-lg px-4 py-2 text-black"
      />
      <br />
      <button
        className="bg-green-400 hover:bg-green-800 px-4 py-2"
        onClick={handleSignup}
      >
        Submit
      </button>
      <br />
      <Link href="/login">Already Signed up? then login</Link>
    </div>
  );
};

export default SignupPage;
