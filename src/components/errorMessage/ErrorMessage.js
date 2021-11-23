import img from './error.gif';

const ErrorMessage = () => {
  const errorStyles = {
    display: 'block',
    width: '250px',
    height: '250px',
    objectFit: 'contain',
    margin: '0 auto'
  }

  return (
    <img style={errorStyles} src={img} alt="Error" />
  )
}

export default ErrorMessage;