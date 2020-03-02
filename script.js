document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#sendButton").onclick = () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    const month = document.querySelector("#usermonth").value;
    document.querySelector("#month").innerHTML = month;

    return false;
  };
});
