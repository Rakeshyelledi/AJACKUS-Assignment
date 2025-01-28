# AJACKUS_Assignment

# User Management Dashboard

## Overview
This is a simple web application that allows users to view, add, edit, and delete user details using a mock backend API (`JSONPlaceholder`). The application is built with **React** and uses `axios` for API requests. The interface is clean and functional, with error handling and optional bonus features like pagination and client-side validation.

You can check out the live version of the portfolio here:  
**[Live Portfolio](https://ajackus-assignment-silk.vercel.app/)**
---

## Features
1. **View Users**: Fetch and display a list of users with details like ID, First Name, Last Name, Email, and Department.
2. **Add Users**: Simulate adding a new user by sending a `POST` request to the API.
3. **Edit Users**: Update user details by sending a `PUT` request to the API.
4. **Delete Users**: Remove a user by sending a `DELETE` request to the API.
5. **Error Handling**: Display user-friendly error messages for failed API requests.
6. **Bonus Features**:
   - Pagination for the user list.
   - Client-side form validation.
   - Responsive UI.

---

## Technologies Used
- **React**: Frontend library for building the user interface.
- **Axios**: For making HTTP requests to the mock API.
- **React Router DOM**: For navigation (if needed).
- **CSS**: For styling the components.
- **JSONPlaceholder**: Mock REST API for user data.

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.

### Steps to Run the Project
1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   cd user-management-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3.Run the application:
   ```bash
   npm start
   ```
4.Open the application:
   ```Visit http://localhost:3000 in your browser```.

## Project Structure
```
user-management-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── UserList.js       # Displays the list of users
│   │   ├── UserForm.js       # Handles adding/editing users
│   │   ├── ErrorBoundary.js  # Catches and displays errors
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point
│   ├── styles.css            # Global styles
├── package.json
├── README.md
```

## Usage

1.Start the application and navigate to http://localhost:3000.

2.View Users: The list of users will be displayed on the homepage.

3.Add User: Click the "Add User" button, fill in the form, and submit.

4.Edit User: Click the "Edit" button next to a user, update the details, and submit.

5.Delete User: Click the "Delete" button next to a user to remove them.

## Features in Detail

### User Management
- Fetch and display users from the `/users` endpoint.
- Add new users using a **POST** request.
- Edit existing users using a **PUT** request.
- Delete users using a **DELETE** request.

### Error Handling
- Displays user-friendly error messages for failed API requests.
- Handles network errors and invalid responses gracefully.
