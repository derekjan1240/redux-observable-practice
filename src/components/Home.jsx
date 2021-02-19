import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  fetchUser,
  fetchUserCancelled,
  resetCurrentUser,
} from "../actions";

function Home() {
  const counter = useSelector((state) => state.counter);
  const pingPong = useSelector((state) => state.pingPong);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container p-5">
        <div className="bg-light p-5">
          <h1>Count: {counter}</h1>
          <button
            type="button"
            className="btn btn-primary p-2 m-2"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-danger p-2 m-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <hr />
        <div className="bg-light p-5">
          <h1>{pingPong.isPinging ? "Ping" : "Pong"}</h1>
          <button
            type="button"
            className="btn btn-primary p-2 m-2"
            onClick={() => dispatch({ type: "PING" })}
          >
            Ping
          </button>
          <button
            type="button"
            className="btn btn-danger p-2 m-2"
            onClick={() => dispatch({ type: "PONG" })}
          >
            Pong
          </button>
        </div>
        <hr />
        <div className="bg-light p-5">
          <h1>Fetch</h1>
          {currentUser.isError ? (
            <h3 className="p-2 text-danger"> 👉 {currentUser?.msg}</h3>
          ) : (
            <h3 className="p-2">👉 {currentUser?.user?.name}</h3>
          )}
          <button
            type="button"
            className="btn btn-primary p-2 m-2"
            onClick={() =>
              dispatch(
                fetchUser(Math.floor(Math.random() * Math.floor(10)) + 1)
              )
            }
          >
            Fetch Success
          </button>
          <button
            type="button"
            className="btn btn-warning p-2 m-2"
            onClick={() => dispatch(fetchUser("1000"))}
          >
            Fetch Error
          </button>
          <button
            type="button"
            className="btn btn-danger p-2 m-2"
            onClick={() => dispatch(fetchUserCancelled())}
          >
            Fetch Cancled
          </button>
          <button
            type="button"
            className="btn btn-secondary p-2 m-2"
            onClick={() => dispatch(resetCurrentUser())}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
