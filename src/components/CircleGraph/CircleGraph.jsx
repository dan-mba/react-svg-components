import PropTypes from 'prop-types'
import isPercentage from '../util/percentage'
import styles from './CircleGraph.module.css'

const CircleGraph = ({
  size = 500,
  percentage,
  color = 'blue',
  emptyColor = '#e0e0e0',
  backgroundColor = '#ffffff',
  textColor = 'black'
}) => {
  if(typeof percentage !== 'number') return null;
  if(percentage < 0 || percentage > 100) return null;
  const circ = 200 * Math.PI;
  const pCirc = (percentage/100) * circ;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size}  height={size} viewBox="0 0 230 230"
      style={{backgroundColor: backgroundColor}}
    >
      <circle cx="115" cy="115" r="100" fill="none" strokeWidth="25"
        stroke={emptyColor} className={styles.move}
      />
      <circle cx="115" cy="115" r="100" fill="none" strokeWidth="25" stroke={color}
        strokeDasharray={`${pCirc} ${circ}`} strokeLinecap="butt"
        className={`${styles.progress} ${styles.move}`}
      />
      <text x="120" y="130" fill={textColor} className={styles.percentage}>{`${percentage}%`}</text>
    </svg>
  )
}

CircleGraph.propTypes ={
  size: PropTypes.number,
  percentage: isPercentage,
  color: PropTypes.string,
  emptyColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default CircleGraph
