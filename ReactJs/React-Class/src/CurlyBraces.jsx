
import './App.css'

function CurlyBraces() {
  let path = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh"
  const name = "Navneet Sharma"
  const useObj = {
    name: "Navneet",
    age: 22,
    city: "Delhi"
  }

  const userArray = ["Navneet", "Ankit", "Rohit", "Sumit"]

  function sum(a, b) {
    return a + b
  }

  function fruit() {
    return "Mango"
  }

  function operation(a, b, op) {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return a / b;
    }
  }


  return (
    <>
      <h1>JSX With curly braces </h1>

      <h2>{name ? name : "user not found"}</h2>
      <h3>{sum(2, 56)}</h3>
      <h3>{fruit()}</h3>
      <h3>{operation(12, 4, "*")}</h3>
      <h1>{useObj.city}</h1>
      <h1>{userArray[2]}</h1>
      <input type="text" value={name} />
      <br />
      <img src={path} alt="ttt" />

    </>
  )
}

export default CurlyBraces
