# 🏥 Mini Hospital Register App (MERN + Redux)

A simple full-stack Hospital Register system to **add**, **list**, and **delete** patients using MongoDB, Express, React, Node.js, and Redux Toolkit.

---

## 📌 Features

- Add a new patient with details
- View all registered patients
- Delete patients who are discharged
- Built with reusable components and API logic

---

## 🧱 Tech Stack

| Frontend                | Backend           | Database      |
| ----------------------- | ----------------- | ------------- |
| React + Vite            | Node.js + Express | MongoDB Atlas |
| TypeScript              | TypeScript        | Mongoose      |
| Redux Toolkit Query     |                   |               |
| Tailwind CSS (optional) |                   |               |

---

## 📁 Folder Structure

```

root/
├── client/
│ ├── src/
│ │ ├── components/
│ │ │ ├── PatientForm.tsx
│ │ │ └── PatientList.tsx
│ │ ├── redux/
│ │ │ └── patientApi.ts
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── index.html
│ └── package.json
├── server/
│ ├── src/
│ │ ├── models/
│ │ │ └── patient.model.ts
│ │ ├── controller/
│ │ │ └── patient.controller.ts
│ │ ├── routes/
│ │ │ └── patient.routes.ts
│ │ └── db.ts
│ ├── index.ts
│ └── package.json

```

---

## 📇 Patient Schema (MongoDB)

```ts
{
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  admissionDate: string; // YYYY-MM-DD
  disease: string;
  status: "Admitted" | "Discharged";
}
```

---

## 🧠 API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/patients`     | Fetch all patients   |
| POST   | `/api/patients`     | Add new patient      |
| DELETE | `/api/patients/:id` | Delete patient by ID |

---

## 🚀 Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/yourusername/hospital-register.git
cd hospital-register
```

### 2. Start the server

```bash
cd server
npm install
npm run dev
```

### 3. Start the client

```bash
cd client
npm install
npm run dev
```

---

## ⚙️ .env Setup (Server)

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/hospital
or
Local Server
```

---

## 📌 Future Improvements

- Patient detail page
- Status update (Admitted → Discharged)
- Filters (e.g., only show admitted)
- Search by name/disease
- Login/Auth for staff/admin

---

## 🙌 Credits

Created by Shubham to master full-stack CRUD with Redux and MongoDB 💪

```

---

Let me know if you want this as a Markdown file download or to add a Notion template style checklist for your development process ✅
```
