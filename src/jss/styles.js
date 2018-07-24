import {properties} from './properties'

const styles = {
  root: props => {
    let root = {}

    Object.entries(props).forEach(([k, v]) => {
      if (properties.includes(k)) root[k] = v
    })

    return root
  },
}

export default styles
