const buttonRoster = document.getElementById('open-roster');
const openListRoster = document.querySelectorAll('.element-roster');

buttonRoster.addEventListener("click", function() {
    openListRoster.forEach(function(element) {
        element.classList.toggle("hidden");
    });
});