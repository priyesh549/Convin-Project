import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./Redux/action";
import UserList from "./Components/UserList";

function App() {
  const [Loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const userData = await axios.get("https://reqres.in/api/user");
    setTimeout(()=>{
      setLoader(true)
    },2500)
    dispatch(setUser(userData.data));
  };

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {Loader === false ? (
        <div className="container">
          <h1>Fetching User's Data Here</h1>
          <div className="spinner-border text-primary my-5" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <UserList />
      )}
    </div>
  );
}

export default App;