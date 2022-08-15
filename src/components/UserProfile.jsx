import React from "react";
import useAuth from "../hooks/useAuth";

export default function UserProfile() {
  const { user } = useAuth();
  console.log(user);
  console.log(process.env.SAVED_USER);
  return <div>UserProfile {process.env.SAVED_USER}</div>;
}
