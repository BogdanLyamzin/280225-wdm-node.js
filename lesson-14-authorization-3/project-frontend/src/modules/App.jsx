import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";

import { getCurrent } from "../redux/auth/auth-thunks";

function App() {
  const token = useSelector(store => store.auth.token);
  const dispatch = useDispatch();

  useEffect(()=> {
    if(token) {
      dispatch(getCurrent(token));
    }
  }, []);

  return (
    <>
      <Header />
      <Navigation />
    </>
  );
}

export default App;
