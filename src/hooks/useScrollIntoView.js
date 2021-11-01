import * as React from 'react'

import { useIsCommitted } from './useIsCommitted'

export const useScrollIntoView = ({ delay, ref, shouldScrollIntoView }) => {
  const hasBeenScrolledIntoViewRef = React.useRef(false)
  const isCommited = useIsCommitted()

  React.useEffect(() => {
    if (!isCommited) return
    if (!shouldScrollIntoView) return
    if (!ref.current) return
    if (hasBeenScrolledIntoViewRef.current) return
    hasBeenScrolledIntoViewRef.current = true
    const runAfterDelay = () => {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    }
    const timeoutId = setTimeout(runAfterDelay, delay)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [delay, isCommited, ref, shouldScrollIntoView])
}
