<div align="center">
<img src="https://raw.githubusercontent.com/Dev-muse/dwelo-property/master/assets/images/logo.png" alt="Dwelo Logo" width="200"/>  
   
  ### Modern Property Rental & Management Solution
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-6.7.0-green)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)](https://tailwindcss.com/)
  
</div>

---

## 🏢 About Dwelo Property

Dwelo Property is a comprehensive property rental and management platform designed to streamline the property search and communication process. Built with modern web technologies, it provides property owners and renters with an intuitive interface to manage listings, communicate seamlessly, and discover properties with ease.

## ✨ Features

### 🏠 Property Management
- **Advanced Property Listings** - Create, edit, and manage property listings with detailed information
- **Rich Media Support** - Upload multiple property images with Cloudinary integration
- **Interactive Maps** - Visualize property locations using Mapbox GL integration
- **Property Search** - Advanced search and filtering capabilities

### 💬 Communication
- **Direct Messaging** - Built-in messaging system for property inquiries
- **Real-time Notifications** - Stay updated with message status and notifications
- **Message Management** - Mark messages as read/unread and manage conversations

### 👤 User Features
- **Secure Authentication** - NextAuth integration for secure user management
- **User Profiles** - Personalized user profiles with property management
- **Bookmark Properties** - Save favorite properties for quick access
- **Social Sharing** - Share properties across social media platforms

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Components** - Modern UI components with Headless UI
- **Loading States** - Smooth loading indicators and skeleton screens
- **Error Handling** - Comprehensive error boundaries and user feedback

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14.2.3](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Headless UI](https://headlessui.com/)** - Unstyled, accessible UI components
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

### Backend & Database
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution

### Integrations
- **[Cloudinary](https://cloudinary.com/)** - Image and video management
- **[Mapbox GL](https://www.mapbox.com/)** - Interactive maps
- **[React Geocode](https://www.npmjs.com/package/react-geocode)** - Geocoding service
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notification system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Dev-muse/dwelo-property.git
cd dwelo-property
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```
### 3. Environment Configuration
Create a .env.local file in the root directory with the following variables:
```bash
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth (if using)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token

# Google Geocoding (if using)
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=your_google_geocoding_api_key
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 in your browser to see the application.

### 📁 Project Structure
```bash
dwelo-property/
├── app/                      # Next.js App Router
│   ├── actions/             # Server actions
│   ├── api/                 # API routes
│   ├── messages/            # Messages page
│   ├── properties/          # Property pages
│   ├── profile/             # User profile
│   ├── layout.jsx           # Root layout
│   └── page.jsx             # Home page
├── components/              # React components
│   ├── AuthProvider.jsx    # Authentication provider
│   ├── MessageCard.jsx      # Message display component
│   ├── PropertyCard.jsx     # Property card component
│   ├── PropertyContactForm.jsx  # Contact form
│   ├── SubmitMessageBtn.jsx # Message submit button
│   └── ...                  # Other components
├── config/                  # Configuration files
├── models/                  # MongoDB models
├── public/                  # Static assets
├── utils/                   # Utility functions
└── .env.local              # Environment variables (create this)
```

## 🎯 Usage

### For Property Seekers
1. **Browse Properties** - Explore available properties on the home page
2. **Search & Filter** - Use advanced search to find properties matching your criteria
3. **View Details** - Click on any property to see full details, images, and location
4. **Contact Owner** - Send messages directly to property owners
5. **Bookmark** - Save your favorite properties for later

### For Property Owners
1. **Create Account** - Sign up using Google OAuth or email
2. **Add Property** - List your properties with detailed information and images
3. **Manage Listings** - Edit or delete your property listings
4. **Respond to Inquiries** - Manage incoming messages from potential renters
5. **Track Engagement** - Monitor property views and interactions

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🌐 Deployment

The easiest way to deploy your Dwelo Property application is to use the [Vercel Platform](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

For detailed deployment instructions, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Maps powered by [Mapbox](https://www.mapbox.com/)
- Images managed by [Cloudinary](https://cloudinary.com/)

---

<div align="center">
  <p>Made with ❤️ by the Dwelo Team</p>
 
</div>
