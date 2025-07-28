# 10MinTask - IELTS Course Product Page (Frontend Engineer Assessment)

**Live Demo:** [https://10mintask.vercel.app](https://10mintask.vercel.app)  
**Original Reference:** [10 Minute School IELTS Course](https://10minuteschool.com/product/ielts-course/)

---

## Overview

This project is a Next.js (React) implementation of a product page for the **IELTS Course by Munzereen Shahid**, built for a Frontend Engineer assessment. The page dynamically fetches and displays detailed course information via the public 10 Minute School API.

### Key Features

- Fetches product data from API with language support (`en` or `bn`)
- Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) with Next.js
- Dynamic SEO metadata generation based on API SEO data with proper Open Graph tags
- Product title, description (rendered as HTML)
- Course instructors section from API `sections` data
- Embedded YouTube product trailer video
- Checklist and course exclusive features displayed from API data
- CTA button with localized text
- Responsive UI with TailwindCSS styling

---

## Technologies Used

- **Next.js 13** (App Router + ISR)
- **React 18**
- **TypeScript**
- **TailwindCSS** for styling
- **SWR + Axios** for client-side data fetching
- 10 Minute School public API for course data and SEO metadata

---

## API Details

- **Endpoint:**  
  `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`

- **Query params:**  
  `lang=en` or `lang=bn`

