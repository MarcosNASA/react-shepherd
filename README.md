# React Shepherd

Lightweight, headless, in-app tutorial builder to guide your customers to better user experiences as shepherds guide sheeps to the
farmyard.

[Test it in CodeSandbox](https://codesandbox.io/s/shepherd-example-3uxjo)

# Components:

## Farmyard
The *element that holds your tutorial* is a `Farmyard`.
Your tutorial steps (a.k.a `Sheep`s) will be portaled to their `Farmyard`.
It's a container you can put anywhere in your app; it creates a stacking context to make sure your `Sheep`s are visible.
### Props
- `zIndex`?: increase the z-index if needed.
- `id`?: if, under some weird circumstances, the `Farmyard`'s `id` clashes with some other `id` in your app, you can give it a custom one. However, doing so requires letting the `Shepherd` know. By default, it's `id` is `shepherd-farmyard`.
```jsx
import { Farmyard } from 'js-shepherd'

export const App = () => (
  <>
    <Farmyard />
    {/** your app here, maybe */}
  </>
)
```

## Shepherd
The guy that coordinates the `Sheep`s is... the `Shepherd`(Provider)!
### Props
- `options`?:
  - `farmyardId`: in case you need to give a custom `id` to your `Farmyard`, match it here. Defaults to `shepherd-farmyard`.
  - `shouldAutoScrollIntoView`: whether `Sheep`s should be auto scrolled into view or not.
```jsx
import { Farmyard, ShepherdProvider } from 'js-shepherd'

export const App = () => (
  <ShepherdProvider>
    // Any subtree of your app which needs a tutorial!
  </ShepherdProvider>
)
```

## Flock
A *group of tutorial steps* is a `Flock`. A tutorial may be composed by one or more `Flock`s.
A `Flock`s' single responsability is portalling their `Sheep`s to the `Farmyard`.
```jsx
import * as React from 'react'
import { Flock, Sheep } from 'js-shepherd'

export const Home = () => {
  const ref = React.useRef()
  return (
    <>
      <div ref={ref}>I need a tutorial!</div>
      <Flock>
        <Sheep spotRef={ref}>
          {/** `Sheep`s content will be unveiled later */}
        </Sheep>
      </Flock>
    </>
  )
}
```
```jsx
import { Farmyard, ShepherdProvider } from 'js-shepherd'

import { Home } from './Home'

export const App = () => (
  <ShepherdProvider>
    <Farmyard />
    <Home />
  </ShepherdProvider>
)
```

## Sheep
A *single tutorial step* is a `Sheep`. A flock may be composed by one or more `Sheep`s.

### Props
- `number`?: by default, `Sheep`s are ordered withing a `Flock` from `0` to `N` in the order they are written, and that's the recommended way of using `Sheep`s. However, `number` allows you to specify your own order.
- options?:
  - `delay`: the miliseconds a `Sheep` should wait until being scrolled into view. Defaults to `0`.
- spotRef: a `ref` to the spot (element) a `Sheep` points to. The spot is the element that determines the position of the `Sheep`.

### Hooks based API
`useShepherd` allows you to consume:
- `flock`: the list of `Sheep`s.
- `setFlock`: programmatically/imperatively add `Sheep`s. Whether this is useful or not is hard to tell.
- `shepherd`:
  - `activeSheep`: the `number` of the current active `Sheep`.
  - `options`: the `Shepherd` options.
- `setShepherd`: programmatically/imperatively update `Shepherd`'s state. Whether this is useful or not is hard to tell.
- `goNextSheep`: function that goes to the next step.
- `goPreviousSheep`: function that goes to the previous step.
- `openFarmyard`: function that resets the tutorial to the first step.
- `closeFarmyard`: function that dismisses the tutorial.
```jsx
import * as React from 'react'
import { Flock, Sheep } from 'js-shepherd'

export const Home = () => {
  const greetRef = React.useRef()
  const farewellRef = React.useRef()
  const {
    closeFarmyard,
    flock,
    goNextSheep,
    goPreviousSheep,
    openFarmyard,    
  } = useShepherd()

  const { length: flockSize } = flock;

  return (
    <>
      <div>
        <p>
          {activeSheep}/{flockSize}
        </p>
        <button onClick={openFarmyard}>Restart</button>
        <button onClick={goPreviousSheep}>Previous</button>
        <button onClick={goNextSheep}>Next</button>
        <button onClick={closeFarmyard}>End</button>
      </div>
      <div ref={greetRef}>Hi!</div>
      <div ref={farewellRef}>Bye!</div>
      <Flock>
        <Sheep spotRef={greetRef}>
          Hi!
        </Sheep>
        <Sheep spotRef={farewellRef}>
          Bye!
        </Sheep>
      </Flock>
    </>
  )
}
```
```jsx
import { Farmyard, ShepherdProvider } from 'js-shepherd'

import { Home } from './Home'

export const App = () => (
  <ShepherdProvider>
    <Farmyard />
    <Home />
  </ShepherdProvider>
)
```
### Render props based API
Passing a function as a `Sheep` `children` will be called with the same stuff as `useShepherd` returns, but, in addition:
- `getSheepProps`: props getter whichs use is always recommended. It gives the `Sheep`'s `children` a good default position based on the `spotRef`'s.
- `position`:
  - `x`: the horizontal position of the `Sheep`s spot (the `x` result of calling `getClientBoundingRect` on the Sheep's `spotRef`).
  - `y`: the vertical position of the `Sheep`s spot (the `y` result of calling `getClientBoundingRect` on the Sheep's `spotRef`).
  - `height`: the height of the `Sheep`s spot (the `height` result of calling `getClientBoundingRect` on the Sheep's `spotRef`).
- `flockLength`: the length of the `Flock`. Will probably be deprecated or added to `useShepherd`.
```jsx
import * as React from 'react'
import { Flock, Sheep } from 'js-shepherd'

export const Home = () => {
  const greetRef = React.useRef()
  const farewellRef = React.useRef()

  return (
    <>
      <div ref={greetRef}>Hi!</div>
      <div ref={farewellRef}>Bye!</div>
      <Flock>
        <Sheep spotRef={greetRef}>
          {({ closeFarmyard, getSheepProps, goNextSheep, goPreviousSheep }) => (
            <div
              {...getSheepProps({
                style: {
                  background: "#eee",
                  padding: "20px 10px"
                }
              })}
            >
              <p>Hi!</p>
              <div>
                <button onClick={goPreviousSheep}>Previous</button>
                <button onClick={closeFarmyard}>Skip</button>
                <button onClick={goNextSheep}>Next</button>
              </div>
            </div>
          )}
        </Sheep>

        <Sheep spotRef={farewellRef}>
          {({ closeFarmyard, getSheepProps, goPreviousSheep, goNextSheep }) => (
            <div
              {...getSheepProps({
                style: {
                  background: "#eee",
                  padding: "10px 20px"
                }
              })}
            >
              <p>Bye!</p>
              <div>
                <button onClick={goPreviousSheep}>Previous</button>
                <button onClick={closeFarmyard}>End</button>
                <button onClick={goNextSheep}>Next</button>
              </div>
            </div>
          )}
        </Sheep>
      </Flock>
    </>
  )
}
```
```jsx
import { Farmyard, ShepherdProvider } from 'js-shepherd'

import { Home } from './Home'

export const App = () => (
  <ShepherdProvider>
    <Farmyard />
    <Home />
  </ShepherdProvider>
)
```
