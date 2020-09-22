import React from 'react'
import { debounce } from '~/utils/index'

const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const params = {
    fn: () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    },
    delay: 3000
  }
  const updateScreenSize = debounce(
    params
  )
  React.useEffect(() => {
    window.addEventListener('resize', updateScreenSize)
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [updateScreenSize])
  return screenSize
}

const withScreenSize = (Comp: React.FunctionComponent) => (props: any) => {
  const screenSize = useScreenSize()
  return <Comp {...props} screenSize={screenSize} />
}

export default withScreenSize
