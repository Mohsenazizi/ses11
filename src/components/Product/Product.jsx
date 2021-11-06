import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const Product = () => {
  const { id } = useParams();
  
  useEffect(() => {
    console.log(id)
  }, [id])
  return (
    <div>
      {id} 
    </div>
  )
}
