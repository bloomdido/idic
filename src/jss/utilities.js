import {
  properties,
  activeProperties,
  checkedProperties,
  disabledProperties,
  enabledProperties,
  focusProperties,
  hoverProperties,
  rootProp,
} from './properties'

const allProperties = [
  ...properties,
  ...activeProperties,
  ...checkedProperties,
  ...disabledProperties,
  ...enabledProperties,
  ...focusProperties,
  ...hoverProperties,
]

export const filterJssProps = (props) => {
  let filtered = {}

  Object.entries(props).forEach(([k, v]) => {
    if (!allProperties.includes(k)) filtered[k] = v
  })

  return filtered
}

export const rootStyles = {
  '&:active': {},
  '&:checked': {},
  '&:disabled': {},
  '&:enabled': {},
  '&:focus': {},
  '&:hover': {},
}

properties.forEach(p => rootStyles[p] = props => props[p])
activeProperties.forEach(p => rootStyles['&:active'][rootProp('active', p)] = props => props[p])
checkedProperties.forEach(p => rootStyles['&:checked'][rootProp('checked', p)] = props => props[p])
disabledProperties.forEach(p => rootStyles['&:disabled'][rootProp('disabled', p)] = props => props[p])
enabledProperties.forEach(p => rootStyles['&:enabled'][rootProp('enabled', p)] = props => props[p])
focusProperties.forEach(p => rootStyles['&:focus'][rootProp('focus', p)] = props => props[p])
hoverProperties.forEach(p => rootStyles['&:hover'][rootProp('hover', p)] = props => props[p])
