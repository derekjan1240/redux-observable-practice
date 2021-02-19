import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, map, takeUntil, catchError } from "rxjs/operators";

import { fetchUserFulfilled, fetchUserRejected } from "../actions/index";

const fetchUserEpic = (action$) =>
  action$.pipe(
    ofType("FETCH_USER"),
    switchMap((action) =>
      ajax
        .getJSON(`http://jsonplaceholder.typicode.com/users/${action.payload}`)
        .pipe(
          map((response) => fetchUserFulfilled(response)),
          takeUntil(action$.ofType("FETCH_USER_CANCELLED")),
          catchError((error) => of(fetchUserRejected(error.xhr.statusText)))
        )
    )
  );

export default fetchUserEpic;
