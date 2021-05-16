import React, { memo,  useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  initialPosition: PropTypes.bool,
  background: PropTypes.string,
  activeBackground: PropTypes.string,
  toggleColor: PropTypes.string
}

const Toggle = ({ toggleColor = 'black', toggled = false, ...props}) => (
  <div style={styles.toggle(toggleColor, toggled)} {...props} />
)

const ToggleButton = ({ initialPosition = false, background = 'white', activeBackground = '#b5e7a0', toggleColor = 'black'  }) => {
  // the state of the toggle, takes an initial position prop
  const  [toggled, setToggled] = useState(initialPosition)

  // the color of the toggle background
  const backgroundColor = (toggled && activeBackground) || background

  return (
    <div style={{ ...styles.container, backgroundColor }} onClick={() => setToggled(!toggled)}>
      <Toggle toggled={toggled} toggleColor={toggleColor} />
    </div>
  )
}

export default memo(ToggleButton)

ToggleButton.propTypes =  propTypes

const styles =  {
  container: {
    width: '30px',
    height: '20px',
    borderRadius: '80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 2px',
    cursor: 'pointer',
    transition: 'background-color 250ms ease'
  },
  toggle: (toggleColor = 'black', toggled = false) => {

    return (
      {
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        backgroundColor: toggleColor,
        transform: `translateX(${(toggled && '14px') || '0px'})`,
        transition: 'transform 250ms ease'
      }
    )
  }
}