import PropTypes from 'prop-types'
import isPercentage from '../util/percentage'
import styles from './ArcGraph.module.css'

const CircleGraph = ({
  size = 500,
  percentage,
  color= 'blue',
  emptyColor = '#e0e0e0',
  textColor = 'black'
}) => {
  if(typeof percentage !== 'number') return null;
  if(percentage < 0 || percentage > 100) return null;
  const circ = 200 * Math.PI;
  const pCirc = (percentage/100) * circ;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size}  height={size*.5} viewBox="0 0 240 130">
      <circle cx="120" cy="123" r="100" fill="none" strokeWidth="25"
        strokeDasharray={`${circ*.5} ${circ}`} strokeLinecap="butt"
        stroke={emptyColor} className={styles.move}
      />
      <circle cx="120" cy="123" r="100" fill="none" strokeWidth="25" stroke={color}
        strokeDasharray={`${pCirc*.5} ${circ}`} strokeLinecap="butt"
        className={`${styles.progress} ${styles.move}`}
      />
      <text x="125" y="115" fill={textColor} className={styles.percentage}>{`${percentage}%`}</text>
    </svg>
  )
}

CircleGraph.propTypes ={
  size: PropTypes.number,
  percentage: isPercentage,
  color: PropTypes.string,
  emptyColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default CircleGraph
