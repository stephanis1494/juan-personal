import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    onClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
}

const CloseIcon = ({
  onClick = () => {},
  width = '24px',
  height = '24px',
  style = {}
}) => {

  return (
    <div
      style={{ width, height, ...style }}
      onClick={onClick}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3337 9.93366L9.93366 11.3337L6.00033 7.40033L2.06699 11.3337L0.666992 9.93366L4.60033 6.00033L0.733659 2.06699L2.13366 0.666992L6.00033 4.60033L9.93366 0.666992L11.3337 2.06699L7.40033 6.00033L11.3337 9.93366Z"
            fill='rgba(0, 0, 0, 0.9)'
          />
      </svg>
    </div>
  )
}

CloseIcon.propTypes = propTypes

export default CloseIcon
