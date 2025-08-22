## 🧪 Dummy Data Generator

Generate realistic sample employee records into MongoDB with one click (or one curl). Built with Express, EJS, and Mongoose.

### ✨ Features
- **Instant seed**: `/generate` creates 10 randomized employee docs
- **Safe re-run**: Clears the collection before seeding to avoid duplicates
- **Config-free local dev**: Uses a local MongoDB by default (`comp` DB)
- **Simple UI hook**: EJS view engine enabled for easy templating

### 🛠️ Tech Stack
- **Runtime**: Node.js
- **Server**: Express
- **DB/ODM**: MongoDB + Mongoose
- **Views**: EJS

### 🚀 Quick Start
```bash
# 1) Install dependencies
npm install

# 2) Make sure MongoDB is running locally
#    Default URL used by the app: mongodb://127.0.0.1:27017/comp

# 3) Start the app (with auto-reload in dev)
npm run start
# App listens on http://localhost:3000
```

### ⚙️ Configuration
The app currently uses an in-file connection string:

```js
// main.js
mongoose.connect("mongodb://127.0.0.1:27017/comp")
```

You can change the database name or host there, or refactor to use an environment variable like `MONGODB_URI`.

### 📡 API
- **GET /**: Renders the default EJS view
- **GET /generate**: Clears the `emp` collection and inserts 10 random employees

Example request:
```bash
curl http://localhost:3000/generate
```

Example response:
```json
{ "message": "Data generated successfully!", "count": 10 }
```

### 🧱 Data Model
Employee documents include fields similar to:
- `name` (random from a preset list)
- `salary` (0–21999)
- `language` (e.g., python, js, java, c++)
- `city` (e.g., kolkata, texas, california)
- `isManager` (boolean)

Schema is defined in `modals/emp.js` via Mongoose.

### 📂 Project Structure
```text
dummmy_data_generator/
├─ main.js               # Express app, routes, Mongo connection
├─ modals/
│  └─ emp.js             # Mongoose model for employees
├─ views/
│  └─ index.ejs          # Example EJS view
├─ package.json
└─ README.md
```

### 📜 NPM Scripts
- `npm run start` – start dev server with nodemon

### 🧭 Development Tips
- If MongoDB isn’t running, you’ll see a connection error in the console.
- Re-run `/generate` anytime to refresh your dataset.

### 🤝 Contributing
PRs and suggestions are welcome! If you have ideas (e.g., more fields, configurable counts, CLI), feel free to open an issue.

### 📄 License
Licensed under the **ISC** license. See `package.json` for details.

---
Built with ❤️ for quick demos, prototypes, and testing.
