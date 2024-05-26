import Rectangle from './rectangle'

export interface RectangleProps {
  scale?: number // 0 - 100 - Inf
  children?: string | JSX.Element | JSX.Element[]
}

export default function Space(props: RectangleProps) {
  const scaleIn = props.scale ?? 100
  const scale = scaleIn / 100

  return (
    <div style={{width: '100%', height: '100%', overflow: 'hidden', background: 'rgba(0,0,0,0.1'}}>
      <div style={{width: '100%', height: '100%', transform: `scale(${scale})`}}>
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
