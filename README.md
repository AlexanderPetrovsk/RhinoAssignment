# RhinoAssignment

## Instructions
 - Copy .env.example files into a new .env file
 - Run **docker-compose up --build** to start the project
 - Frontend: http://localhost:5173
 - Backend http://localhost:3000
 - Be sure to leave the VITE_API_URL as localhost

## API Endpoints
  - GET /notes
  - POST /notes
  - DELETE /notes/:uuid
  - GET /notes/:uuid -> unused by frontend as of right now
 
## Technologies used:
 - NestJs
 - TypeScript
 - React
 - Prisma
 - PostgreSQL
 - Vite
 - Docker


**This is a simple application that includes features for viewing, adding and deleting notes.**

**The idea was to create a monorepo including both the FE and BE projects, the structure was heavily inspired by TurboRepo**

