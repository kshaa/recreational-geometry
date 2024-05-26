import Rectangle from './rectangle';

export interface RectangleProps {
  x?: number
  y?: number
  angle?: number
}

export default function Point(props: RectangleProps) {
  return <Rectangle width={7} height={7} isMeta={true} {...props}/>;
}
