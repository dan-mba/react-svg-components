import styles from './CircleText.module.css'

type CircleTextType = {
  size: number,
  spin: boolean,
  text: string,
  textColor: string
}

const CircleText = ({
  size = 500,
  spin = false,
  text = '',
  textColor = 'black'
}: CircleTextType) => {
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

export default CircleText
