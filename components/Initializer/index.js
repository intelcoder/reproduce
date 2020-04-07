import { useEffect } from 'react'
import ReactGA from 'react-ga'

import lazySizes from 'lazysizes'

const Initializer = () => {
  useEffect(() => {
    // ReactGA.initialize('UA-000000-01', {
    //   debug: false,
    //   titleCase: false,
    //   gaOptions: {
    //     userId: 123
    //   }
    // })
  }, [])
  return null
}

export default Initializer
