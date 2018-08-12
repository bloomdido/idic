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

const activeKey = '&:active'
const checkedKey = '&:checked'
const disabledKey = '&:disabled'
const enabledKey = '&:enabled'
const focusKey = '&:focus'
const hoverKey = '&:hover'

export const buildJssStyles = (props) => {
  let styles = {}

  Object.entries(props).forEach(([k, v]) => {
    if (properties.includes(k)) styles[k] = v

    if (activeProperties.includes(k)) {
      styles[activeKey] = styles[activeKey] || {}

      styles[activeKey][rootProp('active', k)] = v
    }

    if (checkedProperties.includes(k)) {
      styles[checkedKey] = styles[checkedKey] || {}

      styles[checkedKey][rootProp('checked', k)] = v
    }

    if (disabledProperties.includes(k)) {
      styles[disabledKey] = styles[disabledKey] || {}

      styles[disabledKey][rootProp('disabled', k)] = v
    }

    if (enabledProperties.includes(k)) {
      styles[enabledKey] = styles[enabledKey] || {}

      styles[enabledKey][rootProp('enabled', k)] = v
    }

    if (focusProperties.includes(k)) {
      styles[focusKey] = styles[focusKey] || {}

      styles[enabledKey][rootProp('focus', k)] = v
    }

    if (hoverProperties.includes(k)) {
      styles[hoverKey] = styles[hoverKey] || {}

      styles[hoverKey][rootProp('hover', k)] = v
    }
  })

  return styles
}
