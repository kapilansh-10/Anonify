# 💌 Anonify

<div align="center">
  
  **Get honest feedback — anonymously**
  
  A modern, privacy-focused anonymous messaging platform built with Next.js
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.18-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- **🔒 100% Anonymous** — No names, no accounts. People can message you freely without revealing their identity
- **🔗 Shareable Links** — Get your unique profile link and share it anywhere — Instagram, X, or WhatsApp
- **👀 Private Inbox** — Only you can see the messages you receive. Delete them anytime you want
- **🎨 Beautiful UI** — Modern, responsive design with smooth animations
- **⚡ Fast & Secure** — Built with Next.js 15, TypeScript, and NextAuth for robust authentication
- **📱 Mobile Friendly** — Fully responsive design that works seamlessly on all devices

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) with Google OAuth
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + Custom Components
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) database
- Google OAuth credentials ([Get them here](https://console.cloud.google.com/))

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/kapilansh-10/Anonify.git
cd Anonify
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/anonify"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here" # Generate with: openssl rand -base64 32

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. **Set up the database**

```bash
# Run Prisma migrations
npx prisma migrate dev

# (Optional) Open Prisma Studio to view your database
npx prisma studio
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app! 🎉

## 📁 Project Structure

```
anonify/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/                    # Static files
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # NextAuth endpoints
│   │   │   └── messages/     # Message CRUD operations
│   │   ├── components/       # Page components
│   │   ├── dashboard/        # User dashboard
│   │   ├── u/[username]/     # Public user profile pages
│   │   └── providers/        # Context providers
│   ├── components/ui/        # Reusable UI components
│   ├── lib/                  # Utility functions & configurations
│   └── types/                # TypeScript type definitions
└── package.json
```

## 🎯 How It Works

1. **Sign In** — Users sign in with their Google account
2. **Get Your Link** — Receive a unique anonymous profile link (e.g., `anonify.com/u/yourname123`)
3. **Share** — Share your link on social media or messaging apps
4. **Receive Messages** — Anyone can send you anonymous messages without signing in
5. **View & Manage** — Access your private dashboard to read and delete messages

## 🔑 Key Features Explained

### Anonymous Messaging
- Senders don't need to create an account
- No IP tracking or sender identification
- Complete privacy for both parties

### User Dashboard
- View all received messages in one place
- Delete unwanted messages instantly
- Copy your profile link with one click

### Google OAuth Integration
- Secure authentication via NextAuth.js
- Automatic username generation
- Session management with JWT

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio
npx prisma migrate   # Run database migrations
```

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy! ✨

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kapilansh-10/Anonify)

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- `DATABASE_URL`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kapilansh**
- GitHub: [@kapilansh-10](https://github.com/kapilansh-10)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Prisma](https://www.prisma.io/) for the excellent ORM
- [Radix UI](https://www.radix-ui.com/) for accessible components

---

<div align="center">
  Made with ❤️ by Kapilansh
  
  If you found this project helpful, please give it a ⭐!
</div>
