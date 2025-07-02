# João Silva - Mechanical Engineering Portfolio

## Overview

This is a professional portfolio website for João Silva, a mechanical engineer based in Florianópolis, Brazil. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact form system for potential clients to reach out for engineering services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds
- **Theme System**: Custom theme provider with dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Database Provider**: Neon Database (serverless PostgreSQL)

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files

## Key Components

### Frontend Components
- **Header**: Navigation with theme toggle and mobile menu
- **Hero**: Landing section with call-to-action
- **About**: Professional background and credentials
- **Services**: Engineering services offered
- **Contact**: Contact form with validation
- **Footer**: Additional information and links

### Backend Services
- **Contact API**: Handles form submissions and stores in database
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Request Logging**: Comprehensive API request logging middleware

### UI Component System
- Complete shadcn/ui component library implementation
- Consistent design system with CSS variables
- Responsive design with mobile-first approach
- Accessibility features built-in

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in React frontend
   - Form data validated using Zod schemas
   - Data sent to Express API endpoint via TanStack Query
   - Backend validates and stores contact in PostgreSQL
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Theme Management**:
   - Theme state managed in React context
   - Preference stored in localStorage
   - CSS variables updated dynamically

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database
- **Connection**: @neondatabase/serverless driver
- **ORM**: Drizzle ORM with type-safe queries

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library (referenced but not implemented)
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type safety across the stack
- **ESBuild**: Backend bundling for production

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- tsx for running TypeScript backend with hot reload
- Integrated development environment with proxy setup

### Production Build
- Frontend: Vite build outputs to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Static file serving from Express in production
- Environment-based configuration

### Environment Configuration
- Database URL through environment variables
- Development/production mode detection
- Replit-specific optimizations and banner integration

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 02, 2025. Initial setup