function removeSelectedItem() {
    const dropdown = document.getElementById("myDropdown");
    const selectedIndex = dropdown.selectedIndex;

    if (selectedIndex !== -1) {
        dropdown.remove(selectedIndex);
    } else {
        alert("No item selected to remove!");
    }
}
