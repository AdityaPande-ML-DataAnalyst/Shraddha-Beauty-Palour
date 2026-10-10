# Shraddha Beauty Parlour Website

A modern, responsive website for **Shraddha Beauty Parlour**, located in Sai Nagar, Amravati, Maharashtra. The website helps customers explore salon services, view gallery images, learn about offers, and contact the parlour for appointment enquiries.

## Features

* **Home:** Introduction to Shraddha Beauty Parlour.
* **About:** Information about the parlour.
* **Services:** Overview of beauty and salon services.
* **Gallery:** Displays salon images stored through Cloudinary, with image enlargement and swipe navigation.
* **Offers:** Displays available offers.
* **Testimonials:** Customer feedback section.
* **FAQ:** Frequently asked questions.
* **Contact:** Contact information, business hours, WhatsApp appointment enquiries, and Google Maps navigation.
* **Admin panel:** Owner login and gallery image upload management.
* **Responsive design:** Designed for desktop and mobile devices.

## Technology Stack

| Technology              | Purpose                        |
| ----------------------- | ------------------------------ |
| Next.js                 | Frontend framework             |
| React                   | User interface                 |
| TypeScript              | Type-safe development          |
| Tailwind CSS            | Styling and responsive layouts |
| Firebase Authentication | Admin authentication           |
| Cloud Firestore         | Gallery metadata and records   |
| Cloudinary              | Image hosting and uploads      |
| Vercel                  | Website deployment             |

## Business Information

* **Business name:** Shraddha Beauty Parlour
* **Location:** Sai Nagar, Amravati, Maharashtra, India
* **Email:** [shraddhabeautyparlour.amravati@gmail.com](mailto:shraddhabeautyparlour.amravati@gmail.com)
* **Business hours:** 9:00 AM – 9:00 PM, daily

## Services

The website presents beauty and salon services such as:

* Haircuts, hairstyling, hair colouring, spa, and hair treatments
* Bridal, party, and engagement makeup
* Facials, cleanup, and bleach
* Manicure, pedicure, and nail art
* Threading

Customers can use the website's contact options to enquire about services and appointments.

## Getting Started

### Prerequisites

Install the following before running the project:

* Node.js
* npm
* Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AdityaPande-ML-DataAnalyst/Shraddha-Beauty-Palour.git
   ```

2. Open the project directory:

   ```bash
   cd Shraddha-Beauty-Palour
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and configure the environment variables listed below.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open `http://localhost:3000` in your browser.

## Environment Variables

Configure the following variables in `.env.local` for local development.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
```

Obtain the Firebase configuration from your Firebase project settings and the Cloudinary cloud name and upload preset from your Cloudinary dashboard.

**Security notes:**

* Never commit `.env.local` to GitHub.
* Do not expose Firebase Admin service-account credentials or Cloudinary API secrets in frontend code.
* Restrict Firestore write permissions to the authorized owner account.
* Configure Firebase Authentication's authorized domains for your deployed website.

## Production Build

Create the production build:

```bash
npm run build
```

The project is configured for static export using Next.js `output: 'export'`. The generated website files are expected in the `out` directory.

## Deployment on Vercel

1. Push the latest code to GitHub.
2. Sign in to [Vercel](https://vercel.com/) using GitHub.
3. Import the `Shraddha-Beauty-Palour` repository.
4. Configure the project build settings according to `package.json` and `next.config.ts` or `next.config.js`.
5. Add the required environment variables in **Project Settings → Environment Variables**.
6. Deploy the project.
7. Add the deployed Vercel domain to Firebase Authentication's authorized domains if required.
8. Test the public website and admin functionality after deployment.

Firebase provides authentication and database services, while Cloudinary hosts the gallery images. A separate custom backend server is not required for the current client-side architecture.

## Repository

GitHub: https://github.com/AdityaPande-ML-DataAnalyst/Shraddha-Beauty-Palour

## License

This project is developed for Shraddha Beauty Parlour. Contact the project owner before reusing business-specific content, branding, or images.
