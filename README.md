# 📢 MimicMedia (news-app)

MimicMedia is a mini-project built using Vue.js (Composition API), Pinia (state management), and Vue Router (for handling routing), among other technologies. It fetches data from the [NewsAPI.org API](https://newsapi.org) to provide up-to-date news content.


## 🔑 Get Your API Key

To use this project, you need to obtain an API key from [NewsAPI.org](https://newsapi.org). Once you have the key, you should save it in the backend code, where the client side did not detect that

```
VITE_NEWS_API_KEY=your_api_key_here
```

## ⚙️ Project Setup
### 📂 Clone the Project
Clone the project from GitHub using the CLI:

```
git clone https://github.com/arbor0711/news-app.git
```

### 📦 Install Dependencies
Navigate to the project directory and install the necessary dependencies:


```
npm install
```

### 🚀 Serve with Hot Reload
To start the development server with hot reload, run:
```
npm run dev
```

### 🏗️ Build for Production
To build the project for production with minification, run:

```
npm run build
```

## 🔧 Customize Configuration

###Access svg files
To use SVG files in Composition API components, install the Vite SVG Loader package on developer mode:

```
npm install vite-svg-loader --save-dev
```

Then, add the following configuration to vite.config.js:
```
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
});
```

Enjoy building with MimicMedia! 😊
