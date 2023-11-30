import { z } from 'zod'
import styles from './CircleGraph.module.css'

type CircleGraphProps = {
  size: number,
  percentage: number,
  color: string,
  emptyColor: string,
  textColor:string
}

const CircleGraph = ({
  size = 500,
  percentage,
  color = 'blue',
  emptyColor = '#e0e0e0',
  textColor = 'black'
}: CircleGraphProps) => {
  try {
    z.number().gte(0).lte(100).parse(percentage);
  } catch {
    console.error(`Percentage value invalid. Expected a number between 0 - 100. Got ${percentage}`)
    return null;
  }
  const circ = 200 * Math.PI;
  const pCirc = (percentage/100) * circ;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size}  height={size} viewBox="0 0 230 230">
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

export default CircleGraph
