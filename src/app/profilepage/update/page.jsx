"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // Set the current user's name when the session loads
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
    }
  }, [session]);

  // Redirect unauthenticated users
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/Signin");
    }
  }, [isPending, session, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message || "Failed to update information");
        return;
      }

      toast.success("Information updated successfully!");

      router.push("/profilepage");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (isPending || !session?.user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Update Information</h1>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}
