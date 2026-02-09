
# 🏡 Real Estate Platform – Buy, Rent, and Manage Properties
##### A full‑featured real estate platform built with Next.js, allowing users to buy, rent, and list properties. Includes user and admin dashboards, authentication, and property management tools.

---

### 🚀 Features

- 🔐 User Authentication (Login / Register)  
- 🧑‍💼 User Dashboard to manage personal listings  
- 🛠️ Admin Dashboard for managing user requests & properties  
- 🏠 Property Listing System  
  - Users can add their own properties for sale or rent  
  -  Set price, location, and details  
- 🗂️ Property Categories  
  - Apartment  
  - Villa  
  - Shop  
  - Office  
- 🔍 Filtering by Category type 
- 📱 Fully responsive UI  
- ⚡ Built with Next.js App Router

---

### 📂 Project Structure


```bash
project/
 ├── src/
 │    ├── app/                 # App Router (routes, layouts, pages)
 │    │    ├── (auth)/         # Login / Register pages
 │    │    ├── admin/          # Admin dashboard
 │    │    ├── api/            # API routes (if used)
 │    │    ├── dashboard/      # User dashboard
 │    │    ├── buy-residential/ #Property listing & details
 │    │    └── layout.js       # Root layout
 │    │    └── page.js         #Home page
 │    │
 │    ├── components/          # Reusable UI components
 │    │    ├── layout/         # Layouts
 │    │    ├── module/         # Modules
 │    │    ├── template/       # Templates
 │    ├── constants/           # Icons & String constants
 │    ├── providers/           # Next Auth Provider
 │    ├── utils/               # Utils used in project
 │
 ├── public/                   # Static assets
 │    ├── images/              # Property images
 │    └── fonts/               # Custom fonts
 │
 ├── .env.local                # Environment variables
 ├── next.config.js            # Next.js configuration
 ├── package.json
 └── README.md
```

---

### 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js | Main framework |
| React | UI components |
| CSS Modules | Styling |
| NextAuth / JWT |   Authentication |
| MongoDB / | Database  |
| Vercel | Deployment |

---

### 📦 Installation & Setup

1. Clone the repository
`bash
git clone https://github.com/afshinsahrae/real-estate.git
`

2. Install dependencies
`bash
npm install
`

3. Run the development server
`bash
npm run dev
`

App will run at:  
http://localhost:3000

---

### ⚙️ Environment Variables

Create a **.env** file and add:

```javascript 
MONGO_USER=afshin
MONGO_PASS=12345
MONGO_URI=mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.ubhngcw.mongodb.net/?appName=Cluster0

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecret
```
---

🗺️ Roadmap

- Add advanced search filters (price, location, rooms)  
- Add favorites & recently viewed properties  
- Add map-based search  
- Add chat between buyer and seller  
- Add premium listings + payment system  
- Add multi-language support  

---

🤝 Contributing

Pull requests are welcome.  
For major changes, please open an issue first.

---

📄 License

MIT License

