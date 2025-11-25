function ImportExportC() {
  return (
  <>
    <h1>Import And Export Of Component</h1>
  </>
  )
}

export function Login() { //named export
    return(
        <>
        <h4>Login User Component</h4>
        </>
    )
}

export function Setting(){
    return(
        <>
        <h4>This is setting Component</h4>
        </>
    )
}
//we can export only one component as default in a file
export default ImportExportC; 