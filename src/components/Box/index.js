import * as React from 'react'
import injectSheet from 'react-jss'

class Box extends React.PureComponent {
  passthroughProps = () => {
    const {
      classes,
      component,
      children,
      ...passthroughProps,
    } = this.props

    return passthroughProps
  }

  render() {
    const Component = this.props.component || "div"

    const {classes, children} = this.props

    return (
      <Component className={classes.root} {...this.passthroughProps()}>
        {children}
      </Component>
    )
  }
}

const styles = {
  root: {
  },
}

export default injectSheet(styles)(Box)
