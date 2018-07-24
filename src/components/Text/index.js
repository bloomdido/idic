import * as React from 'react'
import injectSheet from 'react-jss'
import {filterJssProps, buildJssStyles} from 'src/jss'

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

    const passthrough = filterJssProps(other)

    return (
      <Component className={classes.root} {...passthrough}>
        {children}
      </Component>
    )
  }
}

const styles = {
  root: props => ({
    ...buildJssStyles(props),

    // overrides
    margin: props.margin || 0,
  }),
}

export default injectSheet(styles)(Text)
