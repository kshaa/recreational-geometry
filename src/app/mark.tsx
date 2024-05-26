export interface MarkProps {
  isHorizontal: boolean
  offset: number
  showOffset: boolean
}

export default function Mark(props: MarkProps) {
  const conceptualWidth = 1
  const conceptualHeight = 5
  const width = props.isHorizontal ? conceptualWidth : conceptualHeight
  const height = props.isHorizontal ? conceptualHeight : conceptualWidth
  const markSign = props.isHorizontal ? '+' : '-'
  const markOffset = `calc(50% ${markSign} ${props.offset / 2}px)`
  const style = { 
    width: width, 
    height: height, 
    position: 'absolute' as any, 
    top: props.isHorizontal ? '50%' : markOffset,
    left: props.isHorizontal ? markOffset : '50%',
    transform: `translate(-50%, -50%)`, 
    background: 'rgba(0, 0, 0, 0.3)' 
  }
  const offsetStyle = {
    position: 'absolute' as any,
    display: props.showOffset ? 'block' : 'none',
    left: props.isHorizontal ? 3 : 8,
    top: props.isHorizontal ? -2 : -2,
    fontSize: '3px',
  }
  return (
    <div style={style}>
      <div style={{position: 'relative'}}>
        <div style={offsetStyle}>{props.offset}</div>
      </div>
    </div>
  );
}
