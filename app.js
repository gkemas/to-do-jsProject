const giris = document.getElementById("giris");
const ekle = document.getElementById("ekle");
const list = document.getElementById("liste");
// const check = document.getElementsByClassName("check");
ekle.addEventListener("click", function () {
  if (!giris.value) {
    alert("please write something");
  } else {
    add();
    giris.innerHTML = giris.value = "";
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
        // this.style.opacity = "0.5";
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
  </button> </div> <br> `;

  list.innerHTML += row;
}

window.onload = () => {
  giris.focus;
};

giris.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    ekle.click();
  }
});

// list.addEventListener("click", (e) => {
//    e.target.nextSibling.style.textDecoration = "line-through";
//    console.log("dd");
//  });
