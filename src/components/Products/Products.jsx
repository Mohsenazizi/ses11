import { useCallback, useEffect } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";

// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

const totalPages = '10';
export const Products = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigateToProduct = useCallback((id)=>() => {
    navigate(`/products/${id}`)
  }, [])

  useEffect(() => {
    const currentPage = searchParams.get('page');
    if (!currentPage) {
      setSearchParams({
        page: 1
      })
    }
   
  }, [])
  useEffect(() => {
    console.log(searchParams.get('page'))
  }, [searchParams])
  const onPageChange = useCallback((type) => () => {
    const currentPage = searchParams.get('page');
    const nextPage = type === 'next' ? parseInt(currentPage) + 1 : parseInt(currentPage) - 1;

    setSearchParams({
      page: nextPage
    })
  }, [searchParams])

  return (
    <>
      <h1>
      Product
      </h1> 
      {[1, 2, 3, 4, 5].map((id) => (
        <button
          key={id}
          onClick={navigateToProduct(id)}
        >
          redirect to  product {id}
        </button>
      ))}
      <div
        style={{
          padding: '30px'
        }}
      >
        <button
          onClick={onPageChange('previous')}
          disabled={searchParams.get('page') === '1'}
        >
          Previous Page
        </button>
        <button
          onClick={onPageChange('next')}
          disabled={searchParams.get('page') === totalPages}
        >
          Next Page
        </button>
      </div>
    </>
  )
}
