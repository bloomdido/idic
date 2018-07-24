import * as React from 'react'
import injectSheet from 'react-jss'
import {filterCssProps, properties, styles} from 'src/jss'

class Text extends React.PureComponent {
  static defaultProps = {
    component: 'p',
  }

  render() {
    const {
      classes,
      component: Component,
      children,
      ...other,
    } = this.props

    const passthrough = filterCssProps(other)

    return (
      <Component className={classes.root} {...passthrough}>
        {children}
      </Component>
    )
  }
}

export default injectSheet(styles)(Text)
