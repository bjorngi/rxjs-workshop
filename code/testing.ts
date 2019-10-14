  test('Should delete notifications and handle api error', () => {
    ts.run(() => {
      const inputValues = {
        a: notificationActions.delete('1'),
        b: notificationActions.delete('11'),
      }
      const expectedValues = {
        m: notificationActions.deleteOk('1'),
        n: notificationActions.deleteFail('11', { status: 505 }),
      }

      const inputMarble = '   a--b--a'
      const expectedMarble = 'm--n--m'

      const api = {
        delete: (url) => () => apiResponses(url),
      }

      const action$ = new ActionsObservable(
        ts.createColdObservable(inputMarble, inputValues)
      )
      const output$ = deleteNotificationRemote(api)(action$, of(null))
      ts.expectObservable(output$).toBe(expectedMarble, expectedValues)
    })
  })
