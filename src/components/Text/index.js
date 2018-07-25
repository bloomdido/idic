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
  root: props => {
    let defaultMargin

    const {margin, marginTop, marginLeft, marginBottom, marginRight} = props

    if (!margin && !marginTop && !marginLeft && !marginBottom && !marginRight) {
      defaultMargin = 0
    }

    return {
      ...buildJssStyles(props),

      // overrides
      margin: props.margin || defaultMargin,
    }
  }
}

export default injectSheet(styles)(Text)
