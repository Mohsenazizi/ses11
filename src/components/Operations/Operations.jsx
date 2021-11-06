import {useContext} from 'react'
import { useCounter } from '../../store/Counter.sotore'

export const Operations = () => {
  const { onAdd, onMinus } = useCounter();
  return (
    <div>
      <button onClick={onAdd}>
        add
      </button>
      <button onClick={onMinus}>
        minus
      </button>
    </div>
  )
}
