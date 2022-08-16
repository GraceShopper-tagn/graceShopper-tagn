import React from "react";
import { deleteUser } from "../api/auth";
import { useState } from "react";

export default function DeleteUser() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h4 id="deleteUserTitle">Delete User Here:</h4>
      <form
        id="deleteUserInfo"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await deleteUser(email);
          console.log("Deleted User: ", result);
          if (result.user) {
            alert(
              `${result.firstname} ${result.lastname} has been deleted from the database.`
            );
            setEmail("");
          } else if (result.message) {
            alert(result.message);
          }
        }}
      >
        <input
          className="admininput"
          placeholder="User Email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button id="deleteUserButton" type="submit">
          Delete User
        </button>
      </form>
    </div>
  );
}
