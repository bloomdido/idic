import * as React from 'react'
import injectSheet from 'react-jss'
import {filterJssProps, buildJssStyles} from 'src/jss'

class Image extends React.PureComponent {
  static defaultProps = {
    component: 'img',
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
  root: buildJssStyles,
}

export default injectSheet(styles)(Image)