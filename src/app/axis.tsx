import Mark from "./mark";

export interface AxisProps {
  isHorizontal: boolean
}

export default function Axis(props: AxisProps) {
  const rotation = props.isHorizontal ? 90 : 0
  const style = { 
    width: '1px', 
    position: 'absolute' as any, 
    left: '50%', 
    top: '-200%', 
    bottom: '-200%', 
    transform: `translate(-50%, 0) rotate(${rotation}deg)`, 
    background: 'rgba(0, 0, 0, 0.3)' 
  }
  const from = -500
  const to = 500
  const range = (from: number, to: number) => Array.from(Array(to - from + 1).keys()).map((n) => n + from)
  return (<>
    <>
      {range(from, to)
        .filter((n) => n !== 0)
        .map((n) => n * 10)
        .filter((n) => {
          if (Math.abs(n) < 70) return n % 20 === 0 
          else if (Math.abs(n) < 100) return n % 100 === 0
          else if (Math.abs(n) < 500) return n % 200 === 0
          else return false
        })
        .map((n) => {
        const showOffset = n > 0 && n < 100 ? true : n % 50 === 0
        return <Mark key={n} isHorizontal={props.isHorizontal} offset={n} showOffset={showOffset}/>
      })}
    </>
    <div style={style}></div>
  </>);
}
