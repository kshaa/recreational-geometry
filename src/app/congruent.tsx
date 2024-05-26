import Rectangle from "./rectangle";
import Space from "./space";

export interface CongruentProps {
  scale?: number
  width: number
}

export default function Congruent(props: CongruentProps) {
  return (
    <Space scale={props.scale}>
      <Rectangle
        className="right"
        width={props.width}
        height={100}
        x={25}
        y={22.25}
        angleDeg={-33.333}
      />
      <Rectangle
        className="left"
        width={props.width}
        height={100}
        x={-25}
        y={22.25}
        angleDeg={33.333}
      />
      <Rectangle
        className="bottom"
        width={props.width}
        height={100}
        x={0}
        y={-22.5}
        angleDeg={90}
      />
    </Space>
  )
}