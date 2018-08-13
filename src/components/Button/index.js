import * as React from 'react'
import injectSheet from 'react-jss'
import {filterJssProps, rootStyles} from 'src/jss'

class Button extends React.PureComponent {
  static defaultProps = {
    component: 'button',
  }

  render() {
    const {
      classes,
      component: Component,
      children,
      ...other,
    } = this.props

    const passthrough = filterJssProps(other)

    return (
      <Component className={classes.root} {...passthrough}>
        {children}
      </Component>
    )
  }
}

const styles = {
  root: rootStyles,
}

export default injectSheet(styles)(Button)
