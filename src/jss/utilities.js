import cssProperties from './properties'

export const filterCssProps = (props) => {
  let filtered = {}

  Object.entries(props).forEach(([k, v]) => {
    if (!cssProperties.includes(k)) filtered[k] = v
  })

  return filtered
}
