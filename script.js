// Switch language display
document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        document.querySelectorAll('.en, .zh').forEach(el => el.style.display = 'none');
        document.querySelectorAll(`.${lang}`).forEach(el => el.style.display = 'block');
    });
});

// Tool submission logic
document.getElementById('submit-button').addEventListener('click', function () {
    const toolName = document.getElementById('tool-name').value;
    const toolLink = document.getElementById('tool-link').value;

    if (toolName && toolLink) {
        alert(`Tool submitted:\nName: ${toolName}\nLink: ${toolLink}`);
        document.getElementById('tool-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
