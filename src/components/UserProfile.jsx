import React from "react";
import useAuth from "../hooks/useAuth";
import EditUser from "./EditUser";

export default function UserProfile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      UserProfile
      <EditUser user={user} />
    </div>
  );
}
