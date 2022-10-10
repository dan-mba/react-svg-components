import PropTypes from 'prop-types'
import styles from './CircleText.module.css'

const CircleText = ({size, spin, text, textColor}) => {
  const textStyle = {
    fontSize: `${Math.min(50, (13.3 / text.length) * 50 )}px`,
    letterSpacing: `${Math.min(0.3, Math.pow(13 / text.length, 1/4) * 0.3)}em`,
    stroke: textColor,

  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 210 210">
      <defs>
        <path id="TestCircle" fill="none" d="
            M 105 105
            m -100, 0
            a 100,100 0 1,0 200,0
            a 100,100 0 1,0 -200,0
          " />
      </defs>
      <text className={`${styles.text} ${spin ? styles.spin : ''}`} style={textStyle}>
        <textPath href="#TestCircle">{text}</textPath>
      </text>
    </svg>
  )
}

CircleText.defaultProps = {
  size: 500,
  spin: false,
  text: 'Testing Testing',
  textColor: 'black'
};

CircleText.propTypes ={
  size: PropTypes.number,
  spin: PropTypes.bool,
  text: PropTypes.string,
  textColor: PropTypes.string,
}

export default CircleText
