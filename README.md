# MERN Estate

A full-stack web application for property listings, built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to browse, create, update, and delete property listings. It also supports authentication using Google OAuth and integrates with Firebase for authentication.

## Demo

You can view the live demo of this application [here](https://mern-estate-y6d1.onrender.com).


## Features

- **User Authentication**: Sign up, sign in, and sign out using email and Google OAuth.
- **Property Listings**: View, create, update, and delete property listings.
- **Search and Filter**: Search for properties based on type, location, and price.
- **Admin Panel**: Manage listings and users with role-based authentication.
- **Responsive Design**: Built with Tailwind CSS for a responsive user interface.

## Technologies Used

- **Frontend**:
  - React.js
  - Redux for state management
  - Tailwind CSS for styling
  - Vite as the build tool
  - Firebase Authentication for Google sign-in

- **Backend**:
  - Node.js with Express
  - MongoDB (using Mongoose)
  - JWT for authentication
  - Cookie-parser for handling cookies

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/NeelanshaAgarwal/mern-estate.git
cd mern-estate
```

## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of the backend directory and add the following environment variables:
 
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
```

4. Start the server:

```bash
 npm start
```

The backend will now be running on `http://localhost:3000`.

## Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will now be running on `http://localhost:5173`.

## Usage

1. Visit the website and register/sign in using email or Google.
2. Browse property listings or create your own listing.
3. Users with admin privileges can manage property listings.

## API Endpoints

### Authentication

- `POST /api/auth/signup`: Sign up a new user.
- `POST /api/auth/signin`: Sign in a user.
- `POST /api/auth/google`: Sign in with Google OAuth.
- `POST /api/auth/signout`: Sign out a user.

### Listings

- `POST /api/listing/create`: Create a new property listing.
- `DELETE /api/listing/delete/:id`: Delete a property listing.
- `POST /api/listing/update/:id`: Update a property listing.
- `GET /api/listing/get/:id`: Get a specific property listing.
- `GET /api/listing/get`: Get all property listings (with filters).

## Deployment

### Backend Deployment

1. Set up a Render account and create a new Node.js web service.
2. Deploy the backend from the backend directory.

### Frontend Deployment

1. Set up a Render static site for the frontend.
2. Deploy the frontend from the `client/dist` folder.

## Contributing

Feel free to fork this repository and submit pull requests! If you encounter any issues or have suggestions for improvements, please open an issue.

## License

This project is licensed under the MIT License.

## Troubleshooting

- If you face database connection issues, make sure your MongoDB Atlas IP whitelist includes your server's IP.
- Ensure that your Firebase authentication credentials are correctly configured.
- If you experience slow API responses, check the server logs for any bottlenecks or errors.

---

### How to Customize:

1. **Repository Links**: Update the repository URL in the `Clone the repository` section.
2. **Environment Variables**: Make sure to add any additional environment variables (e.g., Firebase credentials, JWT secrets).
3. **Deployment**: If you deploy using services other than Render, adjust the deployment instructions accordingly.

