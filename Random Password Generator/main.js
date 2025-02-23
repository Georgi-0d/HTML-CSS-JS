function generate() {
    const length = document.getElementById('length').value || 12;
    const checkboxes = document.querySelectorAll('.checkbox');

    const isNumericChecked = checkboxes[2].checked;
    const isSpecialChecked = checkboxes[3].checked;
    const isUpperCaseChecked = checkboxes[0].checked;
    const isLowerCaseChecked = checkboxes[1].checked;

    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';

    let charSet = '';

    if (isNumericChecked) {
        charSet += numericChars;
    }
    if (isSpecialChecked) {
        charSet += specialChars;
    }
    if (isUpperCaseChecked) {
        charSet += upperCaseChars;
    }
    if (isLowerCaseChecked) {
        charSet += lowerCaseChars;
    }

    if (charSet === '') {
        alert('Please select at least one character type (numeric, special, uppercase, or lowercase).');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    document.querySelector('.pass').textContent = password;
}

function copyPassword() {
    const passwordText = document.querySelector('.pass').textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
