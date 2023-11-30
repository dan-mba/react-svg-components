import styles from './SpinnerBall.module.css'

type SpinnerBallType = {
  size: number,
  primaryColor: string,
  secondaryColor: string,
  duration: string
}

const SpinnerBall = ({
  size= 200,
  primaryColor = 'blue',
  secondaryColor = '#eeeeee',
  duration = '3s'
}: SpinnerBallType) => {
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

export default SpinnerBall;
