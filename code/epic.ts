export const getUserOrgenhet = (commonApi: ICommonApi) => (
 action$: Observable<AnyAction>,
 state$: StateObservable<IStoreState>
): Observable<AnyAction> =>
 action$.pipe(
  ofType(USER_FOUND),
  withLatestFrom(state$),
  switchMap(([, state]) =>
   of(state).pipe(
    filter(R.isEmpty(R.path(['user', 'me']))),
    commonApi.get('/api/v1/me/orgenhet', state),
    map((res) => userActions.fetchUserOrgenhetOk(res)),
    catchError((err) => of(userActions.fetchUserOrgenhetFail(err))),
  ),
 ),
)
