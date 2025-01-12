# Inventory Management App

Welcome to the **Inventory Management App**! This project is built using the latest technologies to provide a robust, scalable, and user-friendly inventory management solution.

## Features

- **Real-time Inventory Updates**: Track your inventory changes instantly.
- **CRUD Operations**: Manage products, categories, and stock levels seamlessly.
- **User Roles & Authentication**: Secure access with customizable roles.
- **Responsive Design**: A beautiful interface that works across all devices.
- **Analytics Dashboard**: Gain insights with real-time inventory data visualization.

## Tech Stack

- **Next.js**: React-based framework for building scalable web applications.
- **TypeScript**: Ensuring type safety and improving developer experience.
- **PostgreSQL**: Robust and scalable relational database.
- **Prisma**: Modern ORM for seamless database management.
- **Node.js**: Backend runtime for efficient server-side operations.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/teukufaandii/inventory-management-app.git
   cd inventory-management-app
   ```

2. **Install dependencies**:
   - For the backend:
     ```bash
     cd server
     npm install
     ```
   - For the frontend:
     ```bash
     cd client
     npm install
     ```

3. **Set up the environment variables**:
   - For the backend, create a `.env` file in the `server` directory and configure it as follows:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/database_name
     ```
   - For the frontend, create a `.env.local` file in the `client` directory and configure it as follows:
     ```env
     NEXT_PUBLIC_API_BASE_URL=http://localhost:{your_port}
     ```

4. **Set up the database**:
   ```bash
   cd server
   npx prisma migrate dev
   ```

5. **Run the development servers**:
   - Backend:
     ```bash
     cd server
     npm run dev
     ```
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```
   Access the app at `http://localhost:3000`.

## Scripts

- **Start backend development server**: `npm run dev` (from the `server` folder)
- **Start frontend development server**: `npm run dev` (from the `client` folder)
- **Build for production**: `npm run build`
- **Run production build**: `npm start`
- **Lint code**: `npm run lint`
- **Format code**: `npm run format`

## Folder Structure

```plaintext
.
├── server/         # Backend server files
│   ├── prisma/     # Prisma schema and migrations
│   ├── src/        # Backend source code
│   ├── package.json # Backend project configuration
├── client/         # Frontend application files
│   ├── public/     # Static files
│   ├── src/
│   │   ├── app/ # Next.js app
│   │   ├── state/      # App State and api
│   ├── package.json    # Frontend project configuration
├── .env            # Environment variables (in `server` folder)
├── tsconfig.json   # TypeScript configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes with clear messages.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or feedback. Happy coding!
