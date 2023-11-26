const billInput = document.querySelector("#billInput");
const numberOfPeopleInput = document.querySelector("#peopleNumber");
const rateButtons = document.querySelectorAll(".btn");
const tipPerPerson = document.querySelector("#tipPerPerson");
const tipTotal = document.querySelector("#tipTotal");
const resetBtn = document.querySelector("#resetBtn");
const zeroPeople = document.querySelector(".zero-people");

let clickedBtn = 0;

function setCalcValues() {
  billInput.addEventListener("mouseover", (e) => {
    e.target.classList.toggle("active-input");
  });

  numberOfPeopleInput.addEventListener("change", () => {
    if (
      numberOfPeopleInput.value === "" ||
      parseInt(numberOfPeopleInput.value) === 0
    ) {
      numberOfPeopleInput.style.border = "2px solid #E17052";
      zeroPeople.style.display = "block";
    } else if (parseInt(numberOfPeopleInput.value) > 0) {
      numberOfPeopleInput.style.border = "";
      zeroPeople.style.display = "none";
    }
  });

  rateButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      rateButtons.forEach((btn) => {
        clickedBtn = event.currentTarget;
        if (btn !== clickedBtn) {
          btn.classList.remove("active-button");
        }
      });
      clickedBtn.classList.toggle("active-button");
    });
  });

  resetBtn.addEventListener("click", (e) => {
    let billValue = parseFloat(billInput.value);
    let tipRate = parseInt(clickedBtn.value) / 100;
    let guestNumber = parseInt(numberOfPeopleInput.value);

    if (
      billInput.value === "" ||
      numberOfPeopleInput.value === "" ||
      clickedBtn.value === ""
    ) {
      tipPerPerson.textContent = "0.00";
      tipTotal.textContent = "0.00";
    } else {
      tipPerPerson.textContent = ((billValue * tipRate) / guestNumber).toFixed(
        2
      );
      tipTotal.textContent = (
        Number(tipPerPerson.textContent) +
        billValue / guestNumber
      ).toFixed(2);
    }
  });
}

setCalcValues();
