
import { useCounter } from '../../store/Counter.sotore'

export const Present = (props) => {
  const { counter } = useCounter();
  console.log(counter);
  return (
    <div>
      <h1>
        {props.children} {counter}
      </h1>
    </div>
  )
}
