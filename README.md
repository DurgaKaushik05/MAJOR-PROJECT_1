# Wanderlust 🏡

Wanderlust is an Airbnb-inspired accommodation listing web application where users can explore destinations, search for places to stay, view listing details, and manage their own listings.

🌐 **Live Demo:** https://major-project-1-j0fd.onrender.com

## ✨ Features

* **Browse Listings:** Explore available accommodation listings with images and details.
* **Search Functionality:** Search listings by title, location, or country.
* **Category Filters:** Filter listings by category.
* **Listing Details:** View detailed information and images for each listing.
* **User Authentication:** Sign up, log in, and log out securely.
* **Create Listings:** Authenticated users can add new listings.
* **Edit and Delete Listings:** Listing owners can update or delete their listings.
* **Reviews and Ratings:** Users can share feedback on listings.
* **Cloud Image Storage:** Listing images are stored using Cloudinary.
* **Responsive UI:** A clean, user-friendly interface with responsive listing cards.
* **Flash Messages:** Display success and error notifications.

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3
* Bootstrap
* EJS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database and Services**

* MongoDB Atlas
* Mongoose
* Cloudinary
* Passport.js for authentication

**Deployment**

* Render

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* A MongoDB Atlas account
* A Cloudinary account

### 1. Clone the Repository

```bash
git clone <(https://github.com/DurgaKaushik05/MAJOR-PROJECT_1.git)>
cd MAJOR-PROJECT_1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the environment variables required by your application.

Example:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret
```

**Important:** Check `cloudConfig.js` and `app.js` for the exact environment variable names used in your project. Replace the example values with your own credentials. Never upload your actual `.env` file or secrets to GitHub.

### 4. Start the Application

Run the following command from the project root:

```bash
node app.js
```

Open your browser at:

```text
http://localhost:8080/listings
```

If your application uses a different port, use the port shown in your terminal.

## 📂 Project Structure

```text
MAJOR-PROJECT_1/
├── controllers/       # Application logic
├── init/              # Sample data and initialization scripts
├── models/            # Mongoose database models
├── public/
│   ├── css/           # Stylesheets
│   └── js/            # Client-side JavaScript
├── routes/            # Express routes
├── utils/             # Utility functions
├── views/
│   ├── includes/      # Navbar, footer, flash messages
│   ├── layouts/       # EJS layouts
│   └── listings/      # Listing pages
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Authentication and authorization
├── app.js             # Main application entry point
├── package.json
└── README.md
```

## 🔐 Security Notes

* Keep credentials and API keys in environment variables.
* Never commit `.env` to a public repository.
* Use secure database credentials and appropriate MongoDB Atlas access permissions.
* Review initialization scripts before running them against a database containing existing data.

## 👩‍💻 Author

**Durga Kaushik**

Wanderlust was developed as a major web development project to practice full-stack web development using Node.js, Express.js, EJS, MongoDB, and Cloudinary.

## 📄 License

No open-source license has been specified for this project yet.
