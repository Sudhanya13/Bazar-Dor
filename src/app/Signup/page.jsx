"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";

export default function Signup() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries());

    console.log(user);

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      console.log(data);
      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mx-auto  max-w-7xl">
      {" "}
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Name</label>
          <input type="name" name="name" className="input" placeholder="Name" />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
}
