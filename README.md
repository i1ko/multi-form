# Multi-Country Sign-Up Flow (React + TypeScript + Vite)

A modern, responsive, and user-friendly multi-step sign-up flow built with React.js, TypeScript, Zustand, React Hook Form, and Tailwind CSS.

## 🚀 Project Overview

This application allows users to register through a dynamic multi-step form tailored to different countries' requirements. Each country selection dynamically alters subsequent steps, presenting users with country-specific fields.

### 🌟 Features

- Dynamic country selection (USA, UAE, India, Germany, Canada, UK)
- Conditional rendering of country-specific form fields
- Real-time validation
- Image upload with dimension (max 600x600px) and size validation (max 1MB). Size is up to your config
- Persistent form state with navigation (next/back)
- Progress indicators
- Local storage persistence for incomplete forms
- Comprehensive review step before submission

## 📦 Tech Stack

- Vite
- React (TypeScript)
- Zustand (State Management)
- React Hook Form (Form Management & Validation)
- Tailwind CSS (Styling)

## 🛠️ Installation & Setup

1. **Clone the repository:**

```sh
  git clone https://github.com/i1ko/multi-form.git
  cd your_repository_folder
```

2. **Install dependencies:**

```sh
  npm install
```

3. **Run the development server:**

```sh
  npm run dev
```

The app will be running on [http://localhost:5173](http://localhost:5173).

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── common/ (Reusable components)
│   └── steps/ (Individual step components)
├── data/ (Country-specific configurations)
├── state/ (Zustand global state management)
└── utils/ (Validation schemas and helper functions)
```

## ✅ Validation & Schema

Validation is handled with **React Hook Form** integrated with customized schemas per country to ensure correct user input.

## 🎨 Styling

- Tailwind CSS for rapid and responsive UI development
- Easily customizable classes and themes

## 📌 State Management

- Zustand is used for a simple and efficient global state management solution.
- Includes local storage persistence for form data.

## 🚧 Roadmap

- Backend integration for submission
- Additional countries and dynamic configurations
- Automated tests (Vitest, React Testing Library)

## 💬 Contributing

Contributions, suggestions, and bug reports are welcome!

Please follow the standard GitHub workflow:
- Fork the repository
- Create a branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push your branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 📜 License

Distributed under the MIT License. See [LICENSE](./LICENSE.txt) for more information.
