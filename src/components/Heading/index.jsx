import PropTypes from 'prop-types'
import './Heading.css'

const Heading = ({ children }) => {
  return <h1 className="Heading">{children}</h1>
}

Heading.propTypes = {
  children: PropTypes.any
}

export { Heading }
