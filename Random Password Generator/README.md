# Password Generator

A simple password generator tool built using HTML, CSS, and JavaScript. This tool allows users to generate secure passwords based on customizable options, including password length and character types.

## Features

- **Customizable Password Length**: Users can select a password length (default is 6 characters).
- **Character Type Selection**: Users can choose which character types to include in the password:
  - Uppercase letters
  - Lowercase letters
  - Numeric characters
  - Special characters
- **Password Generation**: Once the options are set, users can click the "Generate Password" button to generate a password based on their selection.
- **Copy to Clipboard**: After generating the password, users can copy it to their clipboard for easy use.

## How to Use

1. **Select Character Types**:
   - Check or uncheck the boxes for Uppercase, Lowercase, Numeric, and Special Characters based on your password preferences.
2. **Set Password Length**:
   - Adjust the password length by typing a number in the "Password Length" field (default is 6).
3. **Generate Password**:
   - Click the "Generate Password" button to create your secure password.
4. **Copy Password**:
   - Click the "Copy Password" button to copy the generated password to your clipboard.

## Technologies Used

- **HTML**: For structuring the web page and content.
- **CSS**: For styling the password generator interface.
- **JavaScript**: For password generation logic and copy-to-clipboard functionality.

## Code Explanation

### HTML

- The HTML file contains the structure for the password generator, including checkboxes for selecting character types, an input for password length, buttons for generating and copying the password, and a placeholder to display the generated password.

### CSS

- The CSS file is used to style the page, giving it a clean and simple design with responsive features. It includes styles for the password generator's container, title, checkboxes, input fields, and buttons.

### JavaScript

- The JavaScript file contains the logic for generating a secure password based on the selected options. It includes:
  - Gathering user inputs (character types, password length).
  - Generating a random password using the selected options.
  - Displaying the generated password.
  - Copying the password to the clipboard when the user clicks the "Copy Password" button.
