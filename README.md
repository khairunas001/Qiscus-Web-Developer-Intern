# 🗨️ Chat Viewer App

A simple, modular chat interface built with **vanilla JavaScript**. This app renders a chat room view with support for **text, images, video, PDF**, and **YouTube thumbnail links**, using data from a local `.json` file or an external API (based on environment).

---

## 📁 Project Structure

```
src/
├── index.html
├── data/
│   └── data.json              # Chat data in JSON format
├── script/
│   ├── main.js                # Entry point
│   ├── render/
│   │   ├── renderChat.js
│   │   ├── renderHeader.js
│   │   ├── renderBody.js
│   │   └── renderInput.js
│   └── utils/
│       ├── getRoleClass.js
│       └── getRoleName.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chat-viewer-app.git
cd chat-viewer-app
```

### 2. Open the app

You can simply open `index.html` in your browser **OR** use a simple static server (recommended for fetch support):

```bash
# Using VS Code Live Server extension
# OR with Node.js installed
npx serve .
```

Then open: `http://localhost:3000` (port may vary)

---

## 📦 Features

✅ Text chat  
✅ Image support  
✅ Video playback (MP4)  
✅ PDF viewer (opens in new tab)  
✅ YouTube thumbnail preview with link  
✅ Scrolls to latest message  
✅ Basic sender role styling (`admin`, `agent`, `customer`)

---

## 📄 Sample Chat Message Format (JSON)

```json
{
  "type": "video",
  "message": "Watch this",
  "media_url": "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  "sender": "customer@mail.com"
}
```

Supports types: `text`, `image`, `video`, `pdf`, `youtube`.

---

## 🧑‍💻 Author

Made with ❤️ by Khairunas Rhamadhani Wiasanto

---

## 📃 License

MIT License