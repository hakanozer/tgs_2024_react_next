'use client'
import { useRouter, useSearchParams } from 'next/navigation';

function page({params}: { params: {id: string} } ) {
  const searchParams = useSearchParams()
  const route = useRouter()
  console.log(searchParams.get('cat'))

  const sendFnc = () => {
    console.log("this line call")
    route.push('/admin')
  }

  return (
    <>
        <h2>id: {params.id}</h2>
        <button onClick={sendFnc}>Send</button>
    </>
  )
}

export default page