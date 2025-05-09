
# 📚 Book Collection Manager – Project Presentation

## 📝 Project Overview

Book Collection Manager is a full-stack web application allowing users to register, log in, and manage a personal library of books. Users can add, edit, delete, and review books. Built with **Next.js**, **React**, and **Tailwind CSS** on the frontend, and **NestJS**, **Prisma**, and **PostgreSQL** on the backend. Authentication is implemented with **JWT** and protected by middleware.

## 📌 Use Case Summary

| Use Case | Implemented | Notes |
|----------|-------------|-------|
| 1. User can register and log in | ✅ | Full JWT auth flow with protected routes and cookie storage |
| 2. User can add books | ✅ | Form submission and DB insertion via NestJS API |
| 3. User can leave reviews | ✅ | Prisma relations link reviews to users and books |
| 4. User can edit/delete books | ✅ | Editable modal and DELETE/PATCH API methods |
| 5. User can see other reviews | ✅ | Reviews loaded and shown under books |

## ✍️ Technical Implementation

- **Frontend:** Next.js, React, Tailwind, React Hook Form
- **Backend:** NestJS, Prisma, PostgreSQL
- **Authentication:** JWT, stored in cookies, middleware validation in Next.js
- **Testing:** Manual UI testing in browser
- **Error Handling:** NestJS uses `HttpException`, frontend uses toast notifications

## 🚂 Development Process

### Week 1 (18h)
- Setup project and routes
- Implemented book form
- Connected Mongo (initial) and switched to PostgreSQL

### Week 2 (20h)
- Implemented auth, protected routes
- Finished CRUD, added review support
- Final polish and testing

**Total Hours:** 38h

## ☀️ Reflection and Future Work

### Reflection
- Every stage built on the previous one
- Auth and cookie handling integration was most challenging

### Future Improvements
- Add user roles (admin, user)
- Upload book cover images
- Improve search/sort logic
- Add unit testing for backend services

## 📊 Work Hours Log

| Week | Hours |
|------|-------|
| Week 1 | 18 |
| Week 2 | 20 |
| **Total** | **38h** |

## 🏁 Grade Suggestion

- Use Cases: 5/5
- Work Hours: 2/5
- Reflection: Covered
- Final Grade: **4 (Linjaava)**
