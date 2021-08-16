import React, { createContext, useReducer, useContext } from "react";
import RIReducer from "./RIReducer";

export const RIContext = createContext();
const initial_state = {
    candidateLoginValue: {},
    offerAcceptData: {},
    candidateLoginResponse: {},
  };
  

  const [state, dispatch] = useReducer(RIReducer, initial_state);
  const candidateOnBoardLogin = (data) => {
    const formData = { username: data.username, password: data.password };
    candidate
      .post("/auth/candidate/login", formData)
      .then((response) => {
        console.log(response, "login candidate");
        let accessTokenExist = localStorage.getItem("candidate_access_token");
        const token = response.data.token;
        state.candidateLoginResponse = response;
        state.candidateLoginValue = response.data;
        if (token == null) {
          toast.error(response.data.message);
          dispatch({ type: "LOGIN", payload: state });
          data.history.push("/onboard-offer");
        } else if (token !== "" || token !== null) {
          setDefaultCandidiateHeader(token);
          dispatch({ type: "LOGIN", payload: state });
          localStorage.setItem("candidate_access_token", token);
          if (accessTokenExist !== null || accessTokenExist !== undefined) {
            CandidateProfile();
            data.history.push("/offer");
          } else {
            toast.error("Bad Credentials");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });


  return (
    <CandidateContext.Provider
      value={{
        candidateOnBoardLogin,
        candidateRejectOffer,
        candidateAcceptOffer,
        candidateLoginValue: state.candidateLoginValue,
        offerAcceptData: state.offerAcceptData,
        candidateLoginResponse: state.candidateLoginResponse,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};