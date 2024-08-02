"use client"
function Error(props: any) {
 console.log( typeof props )
 console.log(props.error)
 const gotoLogin = () => {
    window.location.href = '/'
 }
  return (
    <>
        <h2>Error</h2>
        <p>{props.error.message}</p>
        <button onClick={gotoLogin} >Goto Login</button>
    </>
  )
}

export default Error