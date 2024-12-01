# iTask : Vite + React Project

## `Clone this Repo`
```
git clone https://github.com/debojyoti-tantra/Chat-Bot.git
```

## `Resources`

### Run the command to create a React App using vite:
```
npm create vite@latest
```

### then install `node_modules`
```
npm install
```

### Use Tailwind by folllowing Steps:
```
npm install -D tailwindcss postcss autoprefixer
```

- Create files `tailwind.config.js` and `postcss.config.js`
```
npx tailwindcss init -p
```

- In tailwind.config.js paste this:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- In `src/index.css` paste this:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### For faching API use axios packege:
```
npm install axios
```

- import axios:
```
import axios from 'axios';
```

### For using React icons:
```
async function generateAns() {
   setAns("loding...")
   const response = await axios({
      url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
      method:"post",
      data:{
         "contents":[
            {"parts":[{"text": question}]}
         ]
      }
   })
   setAns(response["data"]["candidates"][0]["content"]["parts"][0]["text"].replaceAll("*", ""))
}
```

### create .env file to use keys securely:

```
npm install dotenv
```

- in dotenv file:
```
VITE_API_KEY=  your api key
```

- use this:
```
url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
```

### start the server
```
npm run dev
```