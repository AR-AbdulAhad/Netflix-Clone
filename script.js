
function toggleContent(button) {
    var content = button.nextElementSibling;
    var icon = button.querySelector('#icon');
    if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.style.transform = 'rotate(45deg)';
    } else {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    }
}