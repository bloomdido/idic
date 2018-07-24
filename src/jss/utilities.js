import cssProperties from './properties'

export const filterJssProps = (props) => {
  let filtered = {}

  Object.entries(props).forEach(([k, v]) => {
    if (!cssProperties.includes(k)) filtered[k] = v
  })

  return filtered
}

export const buildJssStyles = (props) => {
  let root = {}

  Object.entries(props).forEach(([k, v]) => {
    if (cssProperties.includes(k)) root[k] = v
  })

  return root
}
