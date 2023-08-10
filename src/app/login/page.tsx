"use client"
import Link from "next/link";
import React from "react";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    try {
      let data ={
        email:email,
        password:password
      }
      console.log("data",data);
      axios.post("/api/users/login", data);
      console.log("login successful");
      setEmail("");setPassword("");
      } catch (err) {
        console.log("Error",err);
      }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h2 className=" px-4 py-8">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg px-4 py-2 text-black"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-lg px-4 py-2  text-black"
      />
      <br />

      <button
        className="bg-green-400 hover:bg-green-800 px-4 py-2"
        onClick={handleLogin}
      >
        Login
      </button>
      <br />
      <Link href="/signup">Not Signed up? then sign up first</Link>
    </div>
  );
}
