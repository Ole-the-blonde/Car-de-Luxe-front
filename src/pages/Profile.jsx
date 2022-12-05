import React from "react";
import useAuth from "../auth/useAuth";

const Profile = () => {
  const { currentUser } = useAuth(); //get the information about the user that is logged in

  console.log("the current user", currentUser);

  return (
    <div>
      <p>Welcome to your protected profile!</p>
      {currentUser.isAdmin ? (
        <div>
          <h3>Hello , I'm the admin!</h3>
        </div>
      ) : (
        <div>
          <h3>Not the admin :( </h3>
        </div>
      )}
    </div>
  );
};

export default Profile;
