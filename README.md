# Meetly

Meetly is a modern web application for secure, high-quality video meetings and instant messaging. Connect and collaborate seamlessly with features like HD video calls, integrated chat, and user authentication.

## Features

- 🔒 Secure video calls
- ⚡ HD video quality
- 👥 Integrated real-time chat
- 🧑‍💼 User authentication (Sign Up/Sign In)
- 🚪 Join meetings as a guest
- 🌐 Global connectivity

## Tech Stack

- **Frontend:** React (Vite), MUI, Socket.io-client, Axios
- **Backend:** Node.js, Express, MongoDB, Socket.io
- **Other:** dotenv, bcrypt, CORS, PM2, Nodemon

## Project Structure

```
MEETLY/
  backend/      # Node.js/Express backend API & Socket server
  frontend/     # React frontend (Vite)
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string:
   ```env
   MONGO_URL=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm run dev
   # or for production
   npm start
   ```
   The backend runs on **http://localhost:8000** by default.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend runs on **http://localhost:5173** by default.

## Usage

- Register or log in to create or join meetings.
- Join as a guest for quick access (no registration required).
- Start a video call, share your screen, and chat in real time.

## Scripts

### Backend

- `npm run dev` — Start backend with Nodemon
- `npm start` — Start backend normally
- `npm run prod` — Start backend with PM2

### Frontend

- `npm run dev` — Start frontend with Vite
- `npm run build` — Build frontend for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[ISC](LICENSE) (see backend/package.json)

## Contact

For questions or support, please open an issue on GitHub.
