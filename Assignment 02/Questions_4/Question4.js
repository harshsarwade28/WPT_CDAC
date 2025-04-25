function highlightBold() {
    const boldWords = document.querySelectorAll("#para b");
    boldWords.forEach(word => {
        word.classList.add("highlight");
    });
}

function removeHighlight() {
    const boldWords = document.querySelectorAll("#para b");
    boldWords.forEach(word => {
        word.classList.remove("highlight");
    });
}