import React from 'react'
import throttle from '../../utils/index'

const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const updateScreenSize = throttle(
    () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 300,
  )
  React.useEffect(() => {
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [updateScreenSize])
  return screenSize
}

const withScreenSize = Comp => props => {
  const screenSize = useScreenSize()
  return <Comp {...props} screenSize={screenSize} />
}

export default withScreenSize
