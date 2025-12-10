// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red.
document.getElementById("title").style.color="red";

// 2️⃣ Change background color of all <p> elements to lightgray.
document.querySelectorAll("p").forEach(p =>p.style.background="lightgray");

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
document.getElementById("title").textContent="Welcome to the DOM Lab!(:"

// 4️⃣ Add a solid black border to all <div> elements.
document.querySelectorAll("div").forEach(div => div.style.border="1px solid black")

// 5️⃣ Increase font size of the first <h1> to 36px.
document.querySelector("h1").style.fontSize="36px";

// 6️⃣ Change text color of elements with class="highlight" to blue.
document.querySelectorAll(".highlight").forEach(el => el.style.color = "blue");

// 7️⃣ Add CSS class "active" to the first <div>.
document.querySelector("div").classList.add("active")

// 8️⃣ Change the <body> background color to lightblue.
document.body.style.backgroundColor = "lightblue";

// 9️⃣ Set the font family of all <p> elements to Arial.
document.querySelectorAll("p").forEach(p => p.style.fontFamily = "Arial");

// 🔟 Change the image source of #sampleImage.
document.getElementById("sampleImage").src = "vampire-9890862_1280.jpg"


// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.
const p = document.createElement("p");
p.textContent = "The New Paragraph(: ........ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, officia quos blanditiis odit quaerat tempore a fuga ea dicta facere dolore, aliquam autem quis, quam saepe illum consequuntur eligendi dolorem?";
document.body.appendChild(p);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
const li = document.createElement("li");
li.textContent = " New List Item 4 (:";
document.querySelector("ul").appendChild(li);

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
const btn = document.createElement("button");
btn.textContent = "Click Me!(:";
document.querySelector("div").appendChild(btn);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
const h2 = document.createElement("h2");
h2.textContent = "Inserted h2 (:";
const firstP = document.querySelector("p");
document.body.insertBefore(h2, firstP);

// 1️⃣5️⃣ Create an image and set width and height.
const img = document.createElement("img");
img.src = "vampire-9890862_1280.jpg";
img.width = 200;
img.height = 150;
document.body.appendChild(img);

// 1️⃣6️⃣ Add 3 new <li> items using a loop.
const ul = document.querySelector("ul");
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i + "(:";
  ul.appendChild(li);
}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
const card = document.createElement("div");
card.className = "card";
card.textContent = "This is a class card(:";
document.body.appendChild(card);

// 1️⃣8️⃣ Append a paragraph containing your name.
const paragraph = document.createElement("p");
paragraph.textContent = "My name is Haitham.";
document.body.appendChild(paragraph);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
document.querySelectorAll("p").forEach(p => {
  const span = document.createElement("span");
  span.textContent = " [Edited]";
  p.appendChild(span);
});

// 2️⃣0️⃣ Remove the last child of <ul>.
const list = document.querySelector("ul");
list.removeChild(list.lastElementChild);

// 🟨 PART 3: Event Handling (21–30)

// 2️⃣1️⃣ Add click event that shows an alert.
document.querySelector("button").addEventListener("click", () => alert("OH MY GOSH PERFECT(:!"));

// 2️⃣2️⃣ Change background color of a <div> when clicked.
document.querySelector("div").addEventListener("click", e => e.target.style.backgroundColor = "yellow");

// 2️⃣3️⃣ When hovering over <p>, make it bold.
document.querySelectorAll("p").forEach(p => p.addEventListener("mouseover", () => p.style.fontWeight = "bold")
);

// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
document.querySelectorAll("p").forEach(p =>p.addEventListener("mouseout", () => p.style.fontWeight = "normal")
);

// 2️⃣5️⃣ Add button to hide the image.
document.getElementById("hideBtn").addEventListener("click", () => {
  document.getElementById("sampleImage").style.display = "none";
});

// 2️⃣6️⃣ Add button to show the image again.
document.getElementById("showBtn").addEventListener("click", () => {
  document.getElementById("sampleImage").style.display = "block";
});


// 2️⃣7️⃣ Create a counter button that increases with each click.
let count = 0;
const counterBtn = document.getElementById("counterBtn");
counterBtn.addEventListener("click", () => counterBtn.textContent = ++count);

// 2️⃣8️⃣ Display entered text from an input when button clicked.
document.getElementById("showTextBtn").addEventListener("click", () => {
  const text = document.getElementById("userInput").value;
  alert(text);
});

// 2️⃣9️⃣ Change background color randomly when a button is clicked.
document.getElementById("colorBtn").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// 3️⃣0️⃣ Display which key is pressed.
document.addEventListener("keydown", e => alert("You pressed: " + e.key));

// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.
document.querySelector("li").textContent = "Updated Item (:";

// 3️⃣2️⃣ Get input value when button clicked.
document.getElementById("btn").addEventListener("click", () => {
  alert(document.getElementById("input").value);
});

// 3️⃣3️⃣ Count number of <p> and alert the count.
alert("Number of paragraphs: " + document.querySelectorAll("p").length);


// 3️⃣4️⃣ Remove all <p> elements.
document.querySelectorAll("p").forEach(p => p.remove());

// 3️⃣5️⃣ Replace existing <h2> with new one.
const oldH2 = document.querySelector("h2");
const newH2 = document.createElement("h2");
newH2.textContent = "New h2 it's 35ex";
oldH2.replaceWith(newH2);

// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
document.querySelectorAll("li").forEach(li => li.classList.add("highlighted"));

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
document.querySelector("div").addEventListener("click", e => e.target.classList.toggle("active"));

// 3️⃣8️⃣ Clone an existing element and append copy.
const original = document.querySelector("p");
const clone = original.cloneNode(true);
document.body.appendChild(clone);

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
document.getElementById("scrollBtn").addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
const fruits = ["Apple", "Banana", "Cherry"];
document.getElementById("list").innerHTML = fruits.map(f => `<li>${f}</li>`).join("");
