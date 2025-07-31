# 🔐 LcVault – LeetCode Submission Tracker + JSON Exporter

LcVault is a full-stack web app that allows users to securely **log in to LeetCode**, **fetch their accepted submissions**, and **export them as JSON** — all through a user-friendly interface.

---

## 📸 Preview


<p align="center">
  <img width="49%" alt="Screenshot 1" src="https://github.com/user-attachments/assets/e1f9ecfd-f56c-4451-af6f-1e91a2b9398b" />
  <img width="49%" alt="Screenshot 1" src="https://github.com/user-attachments/assets/c7b02982-b6f3-431c-8e79-7c8a86c8acc8" />
</p>

---

<p align="center">
  <img width="70%" alt="Screenshot 1" src="https://github.com/user-attachments/assets/88b07a85-cec0-4ad7-9af8-6fcd244a0de3" />
</p>

---

## 📦 Features

- 🧠 **LeetCode Login via Browser Automation**
- 📥 **Scrapes All Accepted Submissions** (with timestamps)
- 🧾 **Export as Downloadable JSON**
- 🧑‍💻 **User Credentials + Submissions Saved Securely**
- ⚙️ **Frontend-Triggered Backend Puppeteer Automation**
- 📊 **Clean UI with Toggle States (Login → Fetch → Export)**

---

## 🛠️ Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Frontend   | React.js + TailwindCSS   |
| Backend    | Node.js + Express.js     |
| Scraping   | Puppeteer (Headful login)|
| Database   | MongoDB                  |

---

## ⚙️ How It Works

1. **Login with LeetCode:**  
   Click the **"Login to LeetCode"** button → backend opens a browser → you log in manually.

2. **Fetch Submissions:**  
   Once logged in, backend scrapes all accepted problems using Puppeteer.

3. **Store in MongoDB:**  
   Submissions and user info (email, username) are stored.

4. **Frontend View:**  
   The UI displays a table of submissions + JSON download option.

---

## 🧪 Local Development

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/lcvault-frontend.git
cd lcvault-frontend
```

### 2. Install Dependencies

```bash
npm install
npm run dev
```

---

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first.



## 🛡️ Disclaimer
This tool is for educational and personal use only.
LeetCode's official API is not used — scraping is done via browser automation.

---

## 📌 Note
### 🔒 Backend/API is private for security reasons.
#### If you're interested in accessing the backend or API, feel free to contact me directly.

---

### 🧑‍💻 Made with ❤️ by Alok Jha
