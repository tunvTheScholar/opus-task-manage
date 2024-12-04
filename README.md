# TODO APP WITH VITE + TS

<p align="center">
<img src="./screenshots/to-do-list.png" alt="Todo List management" width="70" />
</p>
<h3 align="center"><b>Opus Todo</b></h3>
<p align="center"><b>Manage your tasks!</b></p>

# Overview

This is a **Opus Todo** built with Vite, React, and TypeScript, using a mock backend powered by json-server. It allows users to manage their tasks with features like adding, updating, and deleting todos.

## Features

- Add, Edit, Delete Todos
- Mock API with json-server
- Modern Frontend Stack: Vite, React, TypeScript

# Prerequisites

- Node.js (Recommended version: 16.x or higher)
- pnpm package manager

# Setup

## Backend

1. Clone the [dummy-json-server repository](https://github.com/tunvTheScholar/dummy-json-server)

```
git clone https://github.com/tunvTheScholar/dummy-json-server.git

```

2. Navigate to the cloned directory:

```
cd dummy-json-server

```

3.Install dependencies using pnpm:

```
pnpm install

```

4. Start the mock server:

```
pnpm run server

```

The server will start at http://localhost:4000 by default.

Mock Endpoints:

GET /todos - Fetch all todos

POST /todos - Add a new todo

PUT /todos/:id - Update an existing todo

DELETE /todos/:id - Delete a todo

## Frontend

1. Clone this project:

```
https://github.com/tunvTheScholar/opus-task-manage.git
```

2. Navigate to the project directory:

```
cd opus-task-manage
```

3.Install dependencies:

```
pnpm install
```

4. Start the development server:

```
pnpm run dev
```

The application will be available at http://localhost:5173 (or the port Vite assigns).

# Technical Decisions

## 1. Layered Architecture for Building Screens

The project adopts a layered architecture, where each screen or feature is treated as a self-contained module within the src/modules directory.

**Directory Structure**

```
/src
  └── modules
      └── homepage
          ├── components/   // React components specific to this module
          ├── hooks/        // Custom hooks specific to this module
          ├── services/     // API or business logic for this module
          ├── constants/    // Static values (e.g., texts, configs)
          ├── homepage.tsx  // Main page component
          └── index.ts      // Barrel file for easier imports

```

### Pros

Modularity: Each module is self-contained, making it easy to maintain and extend.

Scalability: The structure simplifies the addition of new features without disrupting existing ones.

Reusability: Components and hooks can be reused across the module or even globally, if applicable.

Team Collaboration: Developers can work on separate modules independently, reducing conflicts in shared files.

Better Organization: By separating concerns (e.g., components, hooks, services), the codebase becomes more navigable and intuitive.

### Cons

Overhead for Small Projects: The structure can feel excessive for simpler apps with fewer features.

Learning Curve: New team members may require time to understand the modular architecture.

Dependency Management: Sharing logic or components across modules can sometimes create cross-module dependencies, which need careful management.

## 2. Cypress Setup for E2E Testing

Cypress has been set up in the project to facilitate end-to-end (E2E) testing, but the tests are not yet fully implemented due to time constraints.

### Why Cypress?

Easy Setup: Cypress integrates seamlessly with modern web applications like those built with Vite and React.

Real Browser Testing: Cypress runs tests directly in a browser, giving an accurate representation of user interactions.

Comprehensive Test Coverage: It allows testing of the entire user flow, ensuring the application behaves as expected.

### Current Status

Cypress is installed and configured in the project.

Placeholder tests or a basic structure might be present.

Detailed and comprehensive E2E tests will be added in a future update.

### Future Plans

Write tests for critical user flows (e.g., adding, editing, and deleting todos).

Automate testing as part of the CI/CD pipeline to catch issues early during development
