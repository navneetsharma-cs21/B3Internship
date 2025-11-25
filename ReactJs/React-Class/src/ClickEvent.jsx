

function ClickEvent() {
    function handleClick() {
        alert("Button Clicked")
    }

    const fruit = (name) => {
        alert(name)
    }

    const color = () => {
        alert("Red")
    }

    return (
        <>
            <h2>Click Event and Function Call </h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => fruit("Banana")}>Banana</button>
            <button onClick={() => fruit("Apple")}>Apple</button>
            <button onClick={color}>Red</button>
        </>
    )
}

export default ClickEvent;