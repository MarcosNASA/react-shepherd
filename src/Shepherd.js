import * as React from 'react'

import { useComponentSelfRegistration } from './hooks/useComponentSelfRegistration'
import { useNodeRefPosition } from './hooks/useNodeRefPosition'
import { useScrollIntoView } from './hooks/useScrollIntoView'
import { Portal } from './components/Portal'

const goNextSheep = (setShepherd) => () => {
  setShepherd((previousShepherd) => ({
    ...previousShepherd,
    activeSheep: previousShepherd.activeSheep + 1,
  }))
}

const goPreviousSheep = (setShepherd) => () => {
  setShepherd((previousShepherd) => ({
    ...previousShepherd,
    activeSheep: previousShepherd.activeSheep - 1,
  }))
}

export const Farmyard = ({ children, id = 'shepherd-farmyard', zIndex = 1 }) => (
  <div
    id={id}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      pointerEvents: 'none',
      zIndex,
    }}
  >
    {children}
  </div>
)

const ShepherdContext = React.createContext()
const FlockContext = React.createContext()
const SheepContext = React.createContext()

export const useShepherdContext = () => {
  const shepherdContext = React.useContext(ShepherdContext)
  if (!shepherdContext) throw new Error('useShepherdContext must be used within a ShepherdProvider')
  return shepherdContext
}

export const useFlockContext = () => {
  const flockContext = React.useContext(FlockContext)
  if (!flockContext) throw new Error('useFlockContext must be used within a FlockProvider')
  return flockContext
}

export const useSheepContext = () => {
  const sheepContext = React.useContext(SheepContext)
  if (!sheepContext) throw new Error('useSheepContext must be used within a SheepProvider')
  return sheepContext
}

const DEFAULT_SHEPHERD_OPTIONS = {
  farmyardId: 'shepherd-farmyard',
  shouldAutoScrollIntoView: true,
}
export const ShepherdProvider = ({ children, options = {} }) => {
  const [shepherd, setShepherd] = React.useState({
    activeSheep: 0,
    options: { ...DEFAULT_SHEPHERD_OPTIONS, ...options },
  })
  const [sheeps, setSheeps] = React.useState([])

  return (
    <ShepherdContext.Provider value={[shepherd, setShepherd]}>
      <FlockContext.Provider value={[sheeps, setSheeps]}>{children}</FlockContext.Provider>
    </ShepherdContext.Provider>
  )
}

export const Flock = ({ children }) => {
  const [
    {
      options: { farmyardId },
    },
  ] = useShepherdContext()
  const [flockContainer, setFlockContainer] = React.useState()

  React.useEffect(() => {
    if (flockContainer) return
    setFlockContainer(document.getElementById(farmyardId))
  }, [farmyardId, flockContainer])

  if (!flockContainer) return null
  return <Portal container={flockContainer}>{children}</Portal>
}

const DEFAULT_SHEEP_OPTIONS = { delay: 0 }
export const Sheep = ({ children: child, number, options = {}, spotRef }) => {
  const [{ activeSheep }] = useShepherdContext()
  const component = React.useMemo(
    () => ({
      element: spotRef,
    }),
    [spotRef]
  )
  const sheepNumber = useComponentSelfRegistration({
    useContext: useFlockContext,
    component,
    index: number,
  })
  const sheep = React.useMemo(
    () => ({
      number: sheepNumber,
    }),
    [sheepNumber]
  )
  const isActive = activeSheep === sheepNumber

  if (!spotRef.current) return null
  if (!isActive) return null
  return (
    <SheepContext.Provider value={sheep}>
      <RenderAtSpot spotRef={spotRef} options={{ ...DEFAULT_SHEEP_OPTIONS, ...options }}>
        {child}
      </RenderAtSpot>
    </SheepContext.Provider>
  )
}

const VERTICAL_OFFSET = 12
const makeSheepChildPropsGetter =
  ({ position } = {}) =>
  ({ style, ...props } = {}) => ({
    style: {
      position: 'relative',
      width: `calc(100% - ${position.x}px)`,
      left: position.x + window.pageXOffset,
      top: Math.abs(position.y + position.height + window.pageYOffset + VERTICAL_OFFSET),
      pointerEvents: 'all',
      ...style,
    },
    ...props,
  })
const RenderAtSpot = ({ children: child, options, spotRef }) => {
  const [position] = useNodeRefPosition({ ref: spotRef })
  const [shepherd, setShepherd] = useShepherdContext()
  const {
    options: { shouldAutoScrollIntoView },
  } = shepherd
  const [flock] = useFlockContext()
  const sheep = useSheepContext()

  const { delay } = options

  useScrollIntoView({
    delay,
    ref: spotRef,
    shouldScrollIntoView: shouldAutoScrollIntoView,
  })

  if (!spotRef.current) return null
  return (
    <>
      {typeof child === 'function'
        ? child({
            dismiss: () => {
              setShepherd((previousShepherd) => ({
                ...previousShepherd,
                activeSheep: Infinity,
              }))
            },
            flockLength: flock.length,
            getSheepProps: makeSheepChildPropsGetter({ position }),
            goNextSheep: goNextSheep(setShepherd),
            goPreviousSheep: goPreviousSheep(setShepherd),
            position,
            sheep,
            ...shepherd,
          })
        : child}
    </>
  )
}

export const useShepherd = () => {
  const [shepherd, setShepherd] = useShepherdContext()

  return {
    shepherd,
    setShepherd,
    goNextSheep: React.useMemo(() => goNextSheep(setShepherd), [setShepherd]),
    goPreviousSheep: React.useMemo(() => goPreviousSheep(setShepherd), [setShepherd]),
  }
}
