---?color=linear-gradient(100deg, white 50%, #6c2d8a 50.2%)
@snap[west span-50]
@img[span-70](./img/logo.png)
@snapend

@snap[east span-40 h1]
@color[#f6f6f6](Reactive Programming med)
# @color[#f6f6f6](RxJS)
@snapend

@snap[south-east text-white]
Bjørn Gilstad
@snapend


---
@snap[north span-100]
### @color[#6c2d8a](Hva er Reactive Programming?)
@color[#444](Reactive programming is programming with asynchronous data streams.)
<br />

@ul[west]

- Alt er en *stream* av data over tid
- Programmerer rekasjonen på data
- Alle strømmer er like
- *Pull* vs. *Push* modell
@ulend

---
<table>
<thead>
<tr>
<th></th>
<th>Én verdi</th>
<th>*N* verdier</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Pull</strong></td>
<td><code>*Function*</code></td>
<td><code>*Iterator*</code></td>
</tr>
<tr>
<td><strong>Push</strong></td>
<td><code>*Promise*</code></td>
<td><code>*Observable*</code></td>
</tr>
</tbody>
</table>
---
<table>
<thead>
<tr>
<th></th>
<th>Produsent</th>
<th>Konsument</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Pull</strong></td>
<td><strong>Passiv:</strong>
 gir data når spurt</td>
<td><strong>Aktiv:</strong>
 spør etter data</td>
</tr>
<tr>
<td><strong>Push</strong></td>
<td><strong>Aktiv:</strong>
 gir data</td>
<td><strong>Passiv:</strong>
 reagerer på data</td>
</tr>
</tbody>
</table>
---

@snap[middle]
# RxJS
#### Reactive Extensions Library for JavaScript
@snapend

---?include=code/rxjs-api.md
---
@snap[north span-100]
## Observable
https://rxjs-dev.firebaseapp.com/guide/observable
@snapend

* Kilde til data over tid
* Hot og Cold observables

---

@snap[north span-100]
## Subscription
https://rxjs-dev.firebaseapp.com/guide/subscription
@snapend

* Observables gjør ingenting uten en/flere Subscriptions
* Reaksjonen på data fra Observables


---
@code[ts](code/observable.ts)

@[1, zoom-13]
@[3, zoom-13]
@[4, zoom-13]
@[5, zoom-13]

---
@snap[north span-100]
@code[ts code-reveal-fast](code/observable-manual.ts)
@[1-9, zoom-15]
@[11-17, zoom-15]
@[19-25, zoom-15]
@[1-25]
@snapend



---
@snap[north span-100]
## Operators
https://rxjs-dev.firebaseapp.com/guide/operators
@snapend
* Observable<string> -> lenght -> Observable<number>

---
@snap[north span-100]
## Pipe
@snapend

---
@snap[north span-100]
## Oppgave 1
* https://rxviz.com/
* https://rxjs-dev.firebaseapp.com
@snapend

---
@snap[north span-100]
## Oppgave 2
@snapend
*
*

---
@snap[north span-100]
## Oppgave 3
@snapend

---
@snap[north span-100]
## Subject
@snapend

---
@snap[north span-100]
## Oppgave 4
@snapend

---
@snap[north span-100]
## Testing

---
@snap[north span-100]
## Oppgave 5
@snapend


---
@snap[north span-100]
## Redux Observable
https://redux-observable.js.org/
@snapend

---
@snap[]
# ?
@snapend

---
@snap[north span-100]
## Ressurser
@snapend
