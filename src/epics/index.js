import { combineEpics } from "redux-observable";

import pingEpic from "./pingEpic";
import incrementEpic from "./incrementEpic";
import fetchUserEpic from "./fetchUser";

export const rootEpic = combineEpics(incrementEpic, pingEpic, fetchUserEpic);
