import { fromEvent } from 'rxjs'

const buttonElm = document.getElementById('myButton')
const click$ = fromEvent(buttonElm, 'click')
const subscription = click$.subscribe(console.log)


