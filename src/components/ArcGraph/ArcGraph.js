import PropTypes from 'prop-types'
import isPercentage from '../util/percentage'
import styles from './ArcGraph.module.css'

const CircleGraph = ({size, percentage, color, backgroundColor, textColor}) => {
  if(typeof percentage !== 'number') return null;
  if(percentage < 0 || percentage > 100) return null;
  const circ = 200 * Math.PI;
  const pCirc = (percentage/100) * circ;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size}  height={size*.5} viewBox="0 0 240 120">
      <circle cx="120" cy="123" r="100" fill="none" strokeWidth="25"
        strokeDasharray={`${circ*.5} ${circ}`} strokeLinecap="butt"
        transform="rotate(180) translate(-240, -240)" stroke={backgroundColor}
      />
      <circle cx="120" cy="123" r="100" fill="none" strokeWidth="25" stroke={color}
        strokeDasharray={`${pCirc*.5} ${circ}`} strokeLinecap="butt"
        transform="rotate(180) translate(-240, -240)" className={styles.progress}
      />
      <text x="125" y="115" fill={textColor} className={styles.percentage}>{`${percentage}%`}</text>}
    </svg>
  )
}

CircleGraph.defaultProps = {
  size: 500,
  color: 'blue',
  backgroundColor: '#efefef',
  textColor: 'black'
};

CircleGraph.propTypes ={
  size: PropTypes.number,
  percentage: isPercentage,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default CircleGraph
