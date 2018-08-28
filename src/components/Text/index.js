import * as React from 'react'
import injectSheet from 'react-jss'
import {filterJssProps, rootStyles} from 'src/jss'

class Text extends React.PureComponent {
  static defaultProps = {
    component: 'p',
  }

  render() {
    const {
      classes,
      component: Component,
      childRef,
      children,
      ...other,
    } = this.props

    const passthrough = filterJssProps(other)

    return (
      <Component ref={childRef} className={classes.root} {...passthrough}>
        {children}
      </Component>
    )
  }
}

const styles = {
  root: rootStyles,
}

export default injectSheet(styles)(Text)
