import { ofType } from "redux-observable";
import { mapTo, delay } from "rxjs/operators";

const pingEpic = (action$) =>
  action$.pipe(ofType("PING"), delay(1000), mapTo({ type: "PONG" }));

export default pingEpic;
