ALTANSCHOOL WEB
Responsive website for an online education platform. Built as part of a test assignment. The project uses React, Redux Toolkit, Tailwind CSS, and Vite.

🔍 Project Description
This is a responsive, multi-section landing page (e.g., Header, Follow Us, Organic Fashion, New Collection). All content, including text and images, dynamically adapts based on screen width (375, 992, 1366, 1920px). Content and form data are managed centrally using Redux.

⚙️ Technologies Used
✅ React
Used for building a component-based interface. Each section is encapsulated as a reusable component for maintainability and scalability.

✅ Redux Toolkit
Chosen to manage centralized state. Redux stores both dynamic content (titles, paragraphs, images) and form input data. This approach ensures predictable state handling and simplifies communication between components.

✅ Tailwind CSS
Used for styling and responsive design. Utility-first classes make it fast to build and adjust layouts across screen sizes. Custom breakpoints and hover/focus colors are implemented based on project design requirements.

✅ Vite
Vite is used for development and production builds, providing lightning-fast performance with minimal config and native ES module support.

🗂 Project Structure
php
Копіювати
Редагувати
ALTANSCHOOL-WEB/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # React section components
│   ├── redux/            # Redux store and slices
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
✏️ How to Edit Content (via Redux)
All content — including section texts, form labels, and responsive images — is stored in the Redux store (see src/redux/contentSlice.js). To change any content:

Open the file contentSlice.js.

Edit the relevant text or image path under the appropriate screen size key (375, 992, 1366, 1920).

Save and restart the dev server (if needed).

This structure enables you to manage all visible UI content from a single file, improving scalability and localization flexibility.

🚀 Getting Started
🔧 Installation
bash
Копіювати
Редагувати
git clone https://github.com/aalexblade/ALTANSCHOOL-WEB.git
cd ALTANSCHOOL-WEB
npm install
▶️ Start Development Server
bash
Копіювати
Редагувати
npm run dev
🧱 Build for Production
bash
Копіювати
Редагувати
npm run build
🌐 Preview Production Build Locally
bash
Копіювати
Редагувати
npm run preview
🚀 Deploy to GitHub Pages
bash
Копіювати
Редагувати
npm run deploy
The dist folder will be pushed to the gh-pages branch automatically.

🔗 Live Demo
👉 View the site https://aalexblade.github.io/ALTANSCHOOL-WEB/


