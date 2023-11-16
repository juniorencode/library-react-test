import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ children, type, onClick }) => {
  return (
    <button className="Button" type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export { Button }
