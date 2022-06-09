const giris = document.getElementById("giris");
const ekle = document.getElementById("ekle");
const list = document.getElementById("liste");
const show = document.getElementById("show");
ekle.addEventListener("click", function () {
  if (!giris.value) {
    alert("please write something");
    showAlert("danger", "Please write someting");
  } else {
    add();
    showAlert("success", "Successfly");

    giris.value = "";
    let close = document.querySelectorAll(".delete");

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        this.parentElement.remove();
      };
    }
    let check = document.querySelectorAll(".check");
    console.log(check);
    for (let i = 0; i < check.length; i++) {
      check[i].onclick = function () {
        console.log("onclick");
        this.parentElement.style.textDecoration = "line-through";
        // this.style.opacity = ".5";
        this.nextElementSibling.style.color = "green";
        this.style.backgroundColor = "green";
      };
    }
    for (let i = 0; i < close.length; i++) {
      check[i].ondblclick = function () {
        this.parentElement.style.textDecoration = "none";
        this.nextElementSibling.style.color = "black";
      };
    }
  }
});

function add() {
  row = ` <div class="task" > <input type="checkbox" name="todo" id="" class="check">${giris.value}</input> <button class="delete">
  <i class="far fa-trash-alt"></i>
  </button>  </div> `;

  list.innerHTML += row;
}

window.onload = () => {
  giris.focus();
};

giris.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    ekle.click();
  }
});

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} `;
  alert.textContent = message;
 show.appendChild(alert); 

   setTimeout(function () {
    alert.remove();
  }, 1000);
}
