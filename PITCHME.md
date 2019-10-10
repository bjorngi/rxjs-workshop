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

- Alt er en *stream*
- *Push* vs. *Pull* modell
@ulend

---
@snap[north-west span-50 text-center]
### *Push*

- Observable

@snapend

@snap[north-east span-50 text-center]
### *Pull*

- Funksjon
- Promise
@snapend

---
@snap[north]
## Observable
@snapend

* Kilde til data over tid
* Hot og Cold observables

---

@snap[north]
## Subscription
@snapend

* Observables gjør ingenting uten en/flere Subscriptions
* Reaksjonen på data fra Observables


---
@code[ts](code/observable.ts)

@[1, zoom-13](Importere fromEvent fra RxJS)
@[3, zoom-13](Hente DOM element)
@[4, zoom-13](Observable av klikk)
@[5, zoom-13](Logg alle klikk)



---
## Operators
* Observerer og lager ny observable


---
## Pipe


---
## Oppgaver

---
## Ressurser
