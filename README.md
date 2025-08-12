# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Password-Manager

This is a simple password manager web application that allows users to securely store and manage their passwords for various accounts. ( This project is only for educational purposes, you can try this, Don't save your real passwords here)

## Features

- **Secure Storage**: Passwords are securely stored in a MongoDB database.
- **User Authentication**: Users can sign up and log in to access their password vault.
- **Password Generation**: Ability to generate strong and random passwords.
- **Password Copy**: One-click copy functionality for easy usage.
- **Responsive Design**: The application is designed to work seamlessly on desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend), Heroku (Backend)

## Demo

[Live Demo](https://password-manager-git-main-starknightts-projects.vercel.app/)

## Setup Instructions

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Create a `.env` file in the backend directory and add your MongoDB connection string.
4. Run the backend server: `npm start` (inside the backend directory)
5. Run the frontend development server: `npm start` (inside the frontend directory)
6. Open the browser and go to `http://localhost:3000` to access the application.

## Demo Video

<video controls src="AwesomeScreenshot-30_5_2024,8 44 01pm.mp4" title="Title"></video>

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contributors

- [StarKnightt](https://github.com/StarKnightt) - Creator
- [Synchrotek](https://github.com/Synchrotek) - Contributor
