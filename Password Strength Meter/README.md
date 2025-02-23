# Password Strength Checker

A simple web application that helps users evaluate the strength of their passwords. This tool provides real-time feedback on password strength, displays an estimated crack time, and visualizes the strength on a slider. 

## Features
- **Real-time Password Strength Evaluation**: The app analyzes the password's strength based on multiple criteria like length, character variety, and common patterns.
- **Strength Visualization**: A slider shows the strength of the password, ranging from "Weak" to "Very Strong".
- **Crack Time Estimation**: Displays an estimate of how long it would take for a password to be cracked using various attack methods.
- **Strength Levels**: Password strength is categorized into 5 levels: Very Weak, Weak, Medium, Strong, and Very Strong.

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling of the application.
- **JavaScript**: Logic for calculating password strength and crack time.
- **Google Fonts**: "Roboto Mono" font for a clean, monospaced look.

## How to Use
1. Open the `index.html` file in any modern web browser.
2. Type your password in the input field provided.
3. As you type, the password strength will be calculated and displayed both in text and as a color-coded slider.
4. The crack time will also be shown, giving you an estimate of how long it would take to crack the password.

## Password Strength Evaluation Criteria
- **Length**: Passwords longer than 8 characters get higher strength points.
- **Character Variety**: Passwords that contain uppercase letters, lowercase letters, numbers, and special characters are rated higher.
- **Common Passwords**: If the password includes common weak passwords (e.g., "password", "1234"), it will be penalized.
- **Repeated Patterns**: Sequences or repeated characters like "1111" or "aaaa" lower the password strength.
  
### Strength Categories:
- **Very Weak**: Extremely easy to crack.
- **Weak**: A relatively easy password to crack.
- **Medium**: A decent password, but still vulnerable to targeted attacks.
- **Strong**: A good password, taking a significant amount of time to crack.
- **Very Strong**: A highly secure password, making it nearly impossible to crack in a reasonable time frame.

## Files in the Repository
- `index.html`: The main HTML file that contains the structure of the app.
- `styles.css`: The CSS file responsible for styling the app.
- `main.js`: JavaScript logic for calculating strength and crack time.

## Credits
- **Georgi-0d**: The developer of this project.

## Contributing
Feel free to fork the repository and make improvements! Pull requests are welcome.


