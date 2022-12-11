import React, { useState } from "react";
import "./profile.css";
import BasicProfile from "../../components/basicProfile/BasicProfile";
import AddressProfile from "../../components/addressProfile/AddressProfile";
import SecurityProfile from "../../components/securityProfile/SecurityProfile";

const Profile = ({ currentUser }) => {
  const [tab, setTab] = useState(1);
  const tabStyle = "text-#0f172a border-b-2 font-medium border-#0f172a";

  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        <button
          className={`text-gray-600 py-4 px-6 block hover:text-#0f172a focus:outline-none ${
            tab === 1 && tabStyle
          }`}
          onClick={() => setTab(1)}
        >
          Basic Profile
        </button>
        <button
          className={`text-gray-600 py-4 px-6 block hover:text-#0f172a focus:outline-none ${
            tab === 2 && tabStyle
          }`}
          onClick={() => setTab(2)}
        >
          Address
        </button>
        <button
          className={`text-gray-600 py-4 px-6 block hover:text-#0f172a focus:outline-none ${
            tab === 3 && tabStyle
          }`}
          onClick={() => setTab(3)}
        >
          Security
        </button>
      </nav>

      {tab === 1 && <BasicProfile currentUser={currentUser} />}
      {tab === 2 && <AddressProfile currentUser={currentUser} />}
      {tab === 3 && <SecurityProfile currentUser={currentUser} />}
    </div>
  );
};

export default Profile;
