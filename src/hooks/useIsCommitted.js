import * as React from 'react'

export const useIsCommitted = () => {
  const [isCommitted, setIsCommitted] = React.useState()

  React.useEffect(() => {
    setIsCommitted(true)
  }, [])

  return isCommitted
}
