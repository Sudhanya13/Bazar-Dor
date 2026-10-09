"use client";

import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries());

    console.log(user);
    // try {
    // const { data, error } = await authClient.signUp.email({
    //   ...user,
    // });
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      toast.error(error.message || "Registration failed!");
      return;
    }

    if (data) {
      console.log(data);
      toast.success("Registration successful!");
      router.push("/");
    }
    // } catch (error) {
    //   toast.error(error.message || "Something went wrong!");
    // }

    //     if (data) {
    //       console.log(data);
    //       toast.success("Registration successful!");
    //       // redirect("/");
    //       router.push("/");

    // //       catch (error) {
    // //   toast.error(error.message || "Something went wrong!");
    // // }
    //     }
    //     if (error) {
    //       console.log(error);
    //       toast.error(error.message || "Registration failed!");
    //     }
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
