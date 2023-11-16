import './Button.css'

const Button = ({ text, onClick, type }) => {
  return (
    <button className="Button" type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export { Button }
