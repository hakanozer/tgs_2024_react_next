'use client'

function NotFound( ) {
  //const headersList = headers()
  //const host = headersList.get('host')
  //console.log(JSON.stringify(req))
  return (
    <>
        <h2>not-found</h2>
        <p>{ window.location.href }</p>
    </>
    
  )
}

export default NotFound