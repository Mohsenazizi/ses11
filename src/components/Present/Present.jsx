
import { useCounter } from '../../store/Counter.sotore'

export const Present = () => {
  const { counter } = useCounter();
  console.log(counter);
  return (
    <div>
      <h1>
       { counter}
      </h1>
    </div>
  )
}
