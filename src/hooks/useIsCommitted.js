import * as React from 'react'

export const useIsCommitted = () => {
  const [isCommitted, setIsCommitted] = React.useState(false)

  React.useEffect(() => {
    setIsCommitted(true)
  }, [])

  return isCommitted
}
