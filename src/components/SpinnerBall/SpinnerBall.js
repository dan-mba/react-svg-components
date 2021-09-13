import PropTypes from 'prop-types'
import styles from './SpinnerBall.module.css'

const SpinnerBall = ({size, primaryColor, secondaryColor, duration}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size}  height={size}
      viewBox="0 0 200 200" className={styles.svg}
    >
      <circle cx="100" cy="100" r="100" fill={secondaryColor} />
      <circle cx="100" cy="100" r="50" fill="none" strokeWidth="100" stroke={primaryColor}
        className={styles.progress} style={{animationDuration: duration}}/>
    </svg>
  )
}

SpinnerBall.defaultProps = {
  size: 200,
  primaryColor: 'blue',
  secondaryColor: '#eeeeee',
  duration: '3s'
};

SpinnerBall.propTypes ={
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  duration: PropTypes.string,
}

export default SpinnerBall;
