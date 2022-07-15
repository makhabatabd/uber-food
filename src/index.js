import "bootstrap";
import "./scss/styles.scss";

const radio = document.querySelectorAll(".myRadio");
const title = document.getElementById("title");

function checkBox(e) {
  title.innerHTML = e.target.value;
}

radio.forEach((check) => {
  check.addEventListener("click", checkBox);
});
