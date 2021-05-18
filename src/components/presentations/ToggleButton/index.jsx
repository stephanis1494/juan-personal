import React, { memo,  useState } from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ toggleColor = 'black', toggled = false, ...props}) => (
  <div style={styles.toggle(toggleColor, toggled)} {...props} />
)

const propTypes = {
  initialPosition: PropTypes.bool,
  background: PropTypes.string,
  activeBackground: PropTypes.string,
  toggleColor: PropTypes.string,
  onToggle: PropTypes.func
}

const ToggleButton = ({
  initialPosition = false,
  background = 'white',
  activeBackground = '#b5e7a0',
  toggleColor = 'black',
  onToggle = () => {}
}) => {
  // the state of the toggle, takes an initial position prop
  const  [toggled, setToggled] = useState(initialPosition)

  // the color of the toggle background
  const backgroundColor = (toggled && activeBackground) || background

  // handle the toggle click
  const handleToggle = () => {
    setToggled(!toggled)
    onToggle(!toggled)
  }

  return (
    <div style={{ ...styles.container, backgroundColor }} onClick={handleToggle}>
      <Toggle toggled={toggled} toggleColor={toggleColor} />
    </div>
  )
}

ToggleButton.propTypes = propTypes

export default memo(ToggleButton)

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

