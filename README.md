# Bank Admin Panel

## Overview
This project is a Bank Admin Panel created using Vite and React. It utilizes MockAPI for CRUD operations, allowing for user management, performing transactions, and filtering data. React Context is used for global state management.

## Features

### User Management
- **Add Users**: Form to add users with passport ID, cash (default 0), credit (default 100, but adjustable in the form), and isActive (default true).
- **Update Credit**: Form to update a user's credit (positive numbers only).
- **Deposit Cash**: Form to deposit cash to a user by passport ID.
- **Withdraw Money**: Form to withdraw money, using credit if cash runs out (ensure total does not go below 0).

### Transactions
- **Transfer Money**: Form to transfer money between users, where money is deducted from the sender's cash and added to the recipient's credit, using credit if the sender's cash runs out (ensure total does not go below 0).

### User Details
- **Show User Details**: Display details of a user by their passport ID.
- **Show All Users**: Display a list of all users.
- **Filter Users**: Filter users by cash amount and an additional criterion (e.g., credit amount).

### Pages
1. **Home Page**: Overview and navigation.
2. **User Management**: Add, update, and delete users.
3. **Transactions**: Perform deposits, withdrawals, and transfers.

## Setup

1. Initialize a new Vite project with React JavaScript/TypeScript.
    ```bash
    npm create vite@latest bank-admin-panel --template react
    cd bank-admin-panel
    npm install
    ```

2. Create a MockAPI project with a collection for bank users with the following fields:
    - `passportId` (unique string)
    - `cash` (number, default 0)
    - `credit` (number, default 100)
    - `isActive` (boolean, default true)
    - (Optional) Add additional fields such as `name`, `address`, etc.

3. Create necessary components and pages as per the features described.

4. Use React Context for state management across the application.

5. Validate all user actions and ensure error messages are displayed for edge cases.

6. Ensure the UI is responsive and user-friendly.

## Deployment

Deploy the project to Netlify. It is recommended to set up the deployment before writing code to ensure continuous deployment is configured correctly.

1. Push the full project folder hierarchy to your GitHub repository.
2. Link the GitHub repository to a new site on Netlify for continuous deployment.

### Netlify and GitHub Links

- **Netlify Link**: [Your Netlify Link Here](https://mizrahi-tefahot.netlify.app/)]
- **GitHub Repository**: [Your GitHub Repository Link Here]

## Admin Login Details

- **Admin ID**: 223456789
- **Password**: P12345

## Usage

1. **Home Page**: Navigate through the application using the navigation links.
2. **User Management**: Add, update, and delete users.
3. **Transactions**: Perform deposits, withdrawals, and transfers.
4. **View User Details**: View details of a specific user by their passport ID or filter users based on specified criteria.

## License

This project is licensed under the MIT License.

