# Step-by-Step Development Roadmap

Don't try to build the whole ecosystem at once. Break it down into phases to keep yourself motivated and learning systematically.

## Phase 1: The Static Guest View (Next.js + Tailwind)
* **Goal:** Build a beautiful, hardcoded landing page for one fake wedding.
* **Focus:** Learn Next.js routing, components, and Tailwind layout. Make it gorgeous on mobile. Integrate standard Google Maps embed links for locations.

## Phase 2: Connect the Database & Add TypeScript
* **Goal:** Move the wedding data from hardcoded variables into MongoDB Atlas.
* **Focus:** Learn how to fetch data in Next.js using Server Components. Convert your project to TypeScript so your wedding object structure is strictly enforced.

## Phase 3: The Interactive Features (Quiz & Uploads)
* **Goal:** Let guests interact with the page.
* **Focus:** Build the game state for the quiz. Next, integrate Cloudinary's upload widget so guests can upload a picture from their phone camera. Bind the visibility of this button to the `allowGuestUploads` boolean in MongoDB.

## Phase 4: CI/CD & Testing (Automated Tools)
* **Goal:** Set up your safety nets.
* **Focus:** Write a few Jest tests for your quiz component. Set up a GitHub Action workflow file (`.github/workflows/deploy.yml`) that triggers on a git `push` to run your tests automatically before deploying to a platform like Vercel (the absolute best hosting platform for Next.js).

## Phase 5: The Admin Dashboards
* **Goal:** Build the interface where you and the couple log in to edit data.
* **Focus:** Implement authentication (using tools like NextAuth.js or Clerk). Create a simple dashboard containing the toggle switches for permissions, text forms for the timeline, and a view of all uploaded images with a "Delete" button for moderation.