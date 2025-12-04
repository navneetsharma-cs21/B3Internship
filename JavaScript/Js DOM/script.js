//DOM == Body Tag
//DOM manipulation

//html se element select karna
//1.document.getElementById("")
const abcd = document.getElementById("abcd");
console.log(abcd);
console.dir(abcd);

//2.document.getElementByClass("")
const defg = document.getElementsByClassName("defg")
console.log(defg)
console.dir(defg)

//3.document.querySelector()
const ghij = document.querySelector("h3")
console.dir(defg)

//4.document.querySelectorAll()
const jklm = document.querySelectorAll("h3")
console.dir(jklm)


//text/content Access
//1.innerText - Change the text content in the element.
let h1 = document.querySelector("h1")
console.dir(h1) //return the h1 objects(key, value pairs).
h1.innerText = "Hey Navneet This is innerText" //Access the value by key. like Objects

//2.textContent - Change the text content in the element.
let h2 = document.querySelector("h2")
h2.textContent = "Hey Navneet This is textContent"

//3.innerHTML- Change the HTML Code of the element.
let h3 = document.querySelectorAll("h3")
//it returns array so we have to select the index to manipulate
h3[0].innerHTML = "<i>heyy</>"

let h4 = document.querySelector("h3")
//if there is 2 or more than 2 tags of same name it will select the first one.
h4.innerHTML = "<h1> This is H1 modified by JS <h1>"


//Attribute Manipulation.
let a = document.querySelectorAll("a")
console.dir(a)
// a.href = "https://www.youtube.com"
//1.setAttribute("name","value") : To set the value of Attribute
a[0].setAttribute("href", "https://www.youtube.com")

//2.get Attribute("Attribute Name") : To get the value of Attribute
console.log(a[1].getAttribute("href"))

//3.removeAttribute("Attribute Name") : To Delete the Attribute
a[2].removeAttribute("href")


//Dynamic DOM Manipulation.
// let h1 = document.querySelector("h1") : Select the element
h1.remove()

let h5 = document.createElement("h2")
h5.innerText = "Hey This is H2div created by JS"
document.querySelector("div").append(h5)


//Style Updates.
//js se css chsnge krna
console.dir(h2)
h2.style.color = "red";
h2.style.border = "2px solid red"
 
//Select all <li> elements and print their text using a loop.
let lis = document.querySelectorAll("li")
lis.forEach(function(val){
    console.log(val.innerText  )
})











