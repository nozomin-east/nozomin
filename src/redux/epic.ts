import { combineEpics, ActionsObservable } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';

const debugEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    tap((action) => {
      console.log(action);
    }),
    ignoreElements(),
  );

const epic = combineEpics(
  debugEpic,
);

export default epic;
