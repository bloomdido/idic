import * as React from 'react'
import injectSheet from 'react-jss'
import {filterJssProps, buildJssStyles} from 'src/jss'

class List extends React.PureComponent {
  static defaultProps = {
    component: 'ul',
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
    padding: props.padding || 0,
    listStyle: props.listStyle || 'none',
  }),
}

export default injectSheet(styles)(List)
