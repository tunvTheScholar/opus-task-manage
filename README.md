# TODO APP WITH VITE + TS

<p align="center">
<img src="./screenshots/to-do-list.png" alt="Todo List management" width="70" />
</p>
<h3 align="center"><b>Opus Todo</b></h3>
<p align="center"><b>Manage your tasks!</b></p>

# How to setup

## Overview

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
