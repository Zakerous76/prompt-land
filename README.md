# Prompt Land

Prompt Land is a web application where users can share and discover creative prompts. Users can create accounts using their Google accounts via Google Authentication. The project is built with **Next.js** and uses **MongoDB Atlas** for data storage. It is hosted on **Vercel**.

This project was originally created following a YouTube tutorial, but design improvements and customizations have been added.
Live demo: [https://prompt-land-xi.vercel.app/]

<img width="1352" height="933" alt="image" src="https://github.com/user-attachments/assets/41240245-135f-4dc0-b237-cce4d74985b8" />


## Features

- User authentication with **Google OAuth** via NextAuth  
- Create, view, search, and share creative prompts  
- Responsive design enhanced with **Tailwind CSS**  
- Data stored securely in **MongoDB Atlas**  
- Hosted on **Vercel** for production  

## Technologies Used

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextauth.js&logoColor=white)](https://next-auth.js.org/)  
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) 
[![Bcrypt](https://img.shields.io/badge/Bcrypt-FF6F00?style=for-the-badge&logo=bcrypt&logoColor=white)](https://www.npmjs.com/package/bcrypt)  
[![Dotenv](https://img.shields.io/badge/Dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)](https://www.npmjs.com/package/dotenv)  



## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/prompt-land.git

2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file with your MongoDB and NextAuth credentials:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret
   ```
4. Run the development server:

   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## Project Status

✅ Functional and deployed on **Vercel**. Some features were customized from the original tutorial to improve design and usability.

---

Made with ❤️ using Next.js and Tailwind CSS

```

I can also draft the **fields for GitHub repo creation** (short description, website, topics) so you can fill them quickly, just like we did for the previous project.  

Do you want me to do that?
```
