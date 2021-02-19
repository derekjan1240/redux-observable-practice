import { ofType } from "redux-observable";
import { mapTo, filter } from "rxjs/operators";

import { resetCounter } from "../actions/index";

const incrementEpic = (action$, state$) =>
  action$.pipe(
    ofType("INCREMENT"),
    filter(() => state$.value.counter === 5),
    mapTo(resetCounter())
  );

export default incrementEpic;
