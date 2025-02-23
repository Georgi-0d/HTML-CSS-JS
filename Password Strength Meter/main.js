function calculateStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength += 10;
    if (password.length >= 12) strength += 20;
    if (password.length >= 16) strength += 30;
    if (password.length >= 20) strength += 40;

    if (/[a-z]/.test(password)) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;

    if (/1234|qwerty|password|abcd|letmein|admin|welcome|sunshine/i.test(password)) {
        strength -= 50;
    }

    if (/(\d)\1{3,}/.test(password)) strength -= 40; 
    if (/([a-zA-Z])\1{3,}/.test(password)) strength -= 40; 

    const dictionaryWords = ["password", "welcome", "admin", "letmein", "1234", "qwerty"];
    for (let word of dictionaryWords) {
        if (new RegExp(word, 'i').test(password)) {
            strength -= 50;
            break;
        }
    }

    if (/([a-z].*[A-Z])|([A-Z].*[a-z])/.test(password)) strength += 20;
    
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength += 20;

    if (password.length >= 24) strength += 50;

    if (strength > 100) strength = 100;

    return strength;
}

function calculateCrackTime(password) {
    const length = password.length;
    let charSetSize = 26;

    if (/[a-zA-Z]/.test(password)) charSetSize = 52;
    if (/[a-zA-Z0-9]/.test(password)) charSetSize = 62;
    if (/[^A-Za-z0-9]/.test(password)) charSetSize = 94;

    const possibleCombinations = Math.pow(charSetSize, length);

    let guessesPerSecond;

    if (/^\d+$/.test(password)) {
        guessesPerSecond = 10000000;
    } 
    else if (/^[a-z]+$/.test(password)) {
        guessesPerSecond = 1000000;
    } 
    else if (/^[a-zA-Z0-9]+$/.test(password)) {
        guessesPerSecond = 1000000;
    } 
    else if (/[^A-Za-z0-9]/.test(password)) {
        guessesPerSecond = 1000000;
    } 
    else {
        guessesPerSecond = 1000000;
    }

    const secondsToCrack = possibleCombinations / guessesPerSecond;

    return secondsToCrack;
}

function timeFormat(seconds) {
    if (seconds < 60) {
        return `${Math.round(seconds)} seconds`;
    } else if (seconds < 3600) {
        return `${Math.round(seconds / 60)} minutes`;
    } else if (seconds < 86400) {
        return `${Math.round(seconds / 3600)} hours`;
    } else if (seconds < 31536000) {
        return `${Math.round(seconds / 86400)} days`;
    } else {
        return `${Math.round(seconds / 31536000)} years`;
    }
}

function updateStrengthIndicator() {
    const password = document.getElementById("length").value;
    const strength = calculateStrength(password);
    const slider = document.getElementById("strength");
    const strengthText = document.getElementById("strengthText");

    slider.value = strength;

    let crackTimeInSeconds = calculateCrackTime(password);
    let crackTime = timeFormat(crackTimeInSeconds);

    if (strength <= 20) {
        strengthText.textContent = `Very Weak (Crack time: ${crackTime})`;
        strengthText.style.color = "red";
    } else if (strength <= 40) {
        strengthText.textContent = `Weak (Crack time: ${crackTime})`;
        strengthText.style.color = "orange";
    } else if (strength <= 60) {
        strengthText.textContent = `Medium (Crack time: ${crackTime})`;
        strengthText.style.color = "blue";
    } else if (strength <= 80) {
        strengthText.textContent = `Strong (Crack time: ${crackTime})`;
        strengthText.style.color = "lightgreen";
    } else {
        strengthText.textContent = `Very Strong (Crack time: ${crackTime})`;
        strengthText.style.color = "green";
    }
}

document.getElementById("length").addEventListener("input", updateStrengthIndicator);
