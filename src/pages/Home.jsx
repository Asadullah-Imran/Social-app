import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome {user.name}</h1>

      <h2>email: {user.email}</h2>
    </div>
  );
};

export default Home;
