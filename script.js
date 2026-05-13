const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("tasklist");
const progressFill = document.getElementById("progress-fill");

// botão funcionando
document.getElementById("add-task-btn").addEventListener("click", addTask);
taskinput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = taskinput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const icon = document.createElement("span");
      icon.textContent = "💗"; // sticker de check

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed");
        updateProgress();
    });

    li.appendChild(checkbox);
    li.appendChild(icon);
    li.appendChild(span);
    tasklist.appendChild(li);
    
    taskinput.value = "";
    updateProgress();
}

function updateProgress() {
    const totalTasks = tasklist.children.length;

    const checkedTasks =
        tasklist.querySelectorAll("input[type='checkbox']:checked").length;

    if (totalTasks === 0) {
        progressFill.style.width = "0%";
        return;
    }

    const percentage = (checkedTasks / totalTasks) * 100;

    progressFill.style.width = percentage + "%";
    if (percentage === 100) {

    alert("🌸 Yayyy! Everything is done! 💕");

}
}


function updateDate() {
    const now = new Date();

    const days = [
        "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const months = [
        "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
    ];

    document.getElementById("weekday").textContent =
        days[now.getDay()];

    document.getElementById("day-number").textContent =
        now.getDate();

    document.getElementById("month").textContent =
        months[now.getMonth()];
}

// roda quando abrir a página
updateDate();

setInterval(updateDate, 60000); // atualiza a cada 1 min


//teste pagina inicial 
const startBtn = document.getElementById("start-btn");

const inicio = document.querySelector(".inicio");

const container = document.querySelector(".container");

startBtn.addEventListener("click", function () {

    inicio.style.display = "none";

    container.style.display = "block";

});

const backBtn =
    document.getElementById("back-btn");


backBtn.addEventListener("click", function () {

    container.style.display = "none";

    inicio.style.display = "flex";

});