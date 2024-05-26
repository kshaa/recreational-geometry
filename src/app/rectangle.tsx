import cssType from 'csstype'
import Point from './point'

export interface RectangleProps {
  x?: number
  y?: number
  width: string | number 
  height: string | number
  angleDeg?: number
  color?: string
  className?: string
  children?: string | JSX.Element | JSX.Element[]
  position?: cssType.Property.Position
  overflow?: string
  isMeta?: boolean
}

export default function Rectangle(props: RectangleProps) {
  const position: cssType.Property.Position = props.position ?? "absolute"
  const angle = props.angleDeg ?? 0
  const color = props.color ?? "rgba(0, 0, 0, 0.5)"
  const top = props.x !== undefined ? `calc(50% - ${props.y}px)` : undefined
  const left = props.x !== undefined ? `calc(50% + ${props.x}px)` : undefined
  const isPositioned = props.x !== undefined || props.y !== undefined
  const translation = isPositioned ? 'translate(-50%, -50%)' : ''
  const style = {
    display: 'block',
    position: position,
    top: top,
    left: left,
    width: props.width,
    height: props.height,
    background: color,
    transform: `${translation} rotate(${angle}deg)`,
    overflow: props.overflow,
  }

  const width = typeof props.width === 'number' ? props.width : 0
  const height = typeof props.height === 'number' ? props.height : 0
  const points = isPositioned && !props.isMeta && <>
    <Point x={-width / 2} y={-height / 2}></Point>
    <Point x={width / 2} y={-height / 2}></Point>
    <Point x={-width / 2} y={height / 2}></Point>
    <Point x={width / 2} y={height / 2}></Point>
  </>

  return (
    <div style={style} className={props.className}>
      {points}
      <div style={{position: 'relative', width: '100%', height: '100%'}}>
        {props.children}
      </div>
    </div>
  );
}
