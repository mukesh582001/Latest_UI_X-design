# Xdesign Kitchen Customizer - replit.md

## Overview

This is a professional kitchen design customization web application built for Timber Craft Homes, powered by Biorev Technology. The application allows users to visualize and customize a specific kitchen design by changing wall colors, cabinet finishes, backsplash styles, and flooring options. Built with React, TypeScript, and modern web technologies, it features a responsive design optimized for both desktop and mobile devices with real-time visual updates and export functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## Client & Branding Information

**Client:** Timber Craft Homes
- Primary branding color: Blue (#3498db) 
- Logo: Timber Craft Homes logo integrated into header
- Product name: "Xdesign Kitchen Customizer"

**Developer:** Biorev Technology  
- Technology provider attribution in header
- Logo: Biorev Technology logo displayed as "Powered by"

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript, using Vite for bundling and development
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components with TypeScript
- **UI Components**: shadcn/ui component library providing consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animation**: Framer Motion for smooth transitions and interactions
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Custom hooks for kitchen customization state

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Structure**: RESTful API endpoints with `/api` prefix
- **Session Management**: PostgreSQL session storage with connect-pg-simple

### Database Schema
- **Users Table**: Basic user authentication with username and password
- **Schema Location**: `shared/schema.ts` for type sharing between client and server
- **Migration Management**: Drizzle Kit for database migrations
- **Type Safety**: Zod schemas generated from Drizzle schema definitions

### Key Features
- **Single Kitchen Focus**: Customization of one specific kitchen design provided by client
- **Wall Color Customization**: Interactive color picker with preset options and visual overlay effects
- **Material Selection**: Cabinet finishes, backsplash styles, and flooring options with color swatches
- **Real-time Preview**: Instant visual feedback with color overlays and material indicators
- **Professional Branding**: Full client branding integration with Timber Craft and Biorev logos
- **Mobile Responsive**: Adaptive UI with slide-up customization panel for mobile devices
- **Export Functionality**: Design download and sharing capabilities

## Data Flow

1. **Client State Management**: Kitchen customization state managed through custom hooks
2. **Single Design Focus**: One primary kitchen image with color overlay system for visual changes
3. **Real-time Updates**: Material and color changes trigger immediate preview updates
4. **Asset Management**: Client-provided kitchen image and logos properly imported via Vite
5. **Responsive Design**: Mobile-first approach with slide-up customization panel
6. **Professional Branding**: Integrated client and developer branding throughout the interface

## Recent Changes (January 2025)

- **Converted to Single Kitchen Design**: Removed multiple style options, now focuses on one client-provided kitchen image
- **Added Professional Branding**: Integrated Timber Craft client logo and Biorev Technology developer attribution
- **Enhanced Color System**: Improved wall color overlay effects with soft-light blend mode
- **Material Visualization**: Added color swatches for cabinets, backsplash, and flooring options
- **Updated UI Components**: Redesigned preview panel with material indicators and professional styling
- **Asset Integration**: Properly configured client-provided images using Vite's asset handling system

## External Dependencies

### Core Framework Dependencies
- **React**: Frontend framework with TypeScript support
- **Express**: Backend server framework
- **Drizzle**: Type-safe ORM for PostgreSQL operations
- **TanStack Query**: Server state management and caching
- **Zod**: Runtime type validation and schema definition

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives (via shadcn/ui)
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Frontend build tool and development server
- **TSX**: TypeScript execution for server development
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### Database and Storage
- **@neondatabase/serverless**: PostgreSQL database adapter
- **connect-pg-simple**: PostgreSQL session store for Express
- **Drizzle Kit**: Database migration and introspection tools

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite HMR for client, TSX for server auto-restart
- **Type Checking**: Incremental TypeScript compilation
- **Database**: Development database with Drizzle migrations
- **Asset Serving**: Vite dev server with Express API proxy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Production PostgreSQL with connection pooling
- **Static Serving**: Express serves built frontend assets

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Storage**: PostgreSQL-backed session management
- **Asset Optimization**: Vite handles code splitting and asset optimization
- **Error Handling**: Centralized error handling with development error overlay

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting environments with minimal configuration changes.