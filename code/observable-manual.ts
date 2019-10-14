const observable$ = new Observable(sub => {
  sub.next(1);
  sub.next(2);
  sub.next(3);
  setTimeout(() => {
    sub.next(4);
    sub.complete();
  }, 1000);
});

console.log('before subscribe');
observable$.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('error!'); },
  complete() { console.log('done'); }
});
console.log('after subscribe');

before subscribe
got value 1
got value 2
got value 3
after subscribe
got value 4
done
