const buttonRoster = document.getElementById('open-roster');
const openListRoster = document.querySelectorAll('.element-roster');

buttonRoster.addEventListener("click", function(event) {
    event.stopPropagation();
    openListRoster.forEach(function(element) {
        element.classList.toggle("hidden");
    });
});

document.addEventListener("click", function() {
    openListRoster.forEach(function(element) {
        if (!element.classList.contains("hidden")) {
            element.classList.add("hidden");
        }
    });
});