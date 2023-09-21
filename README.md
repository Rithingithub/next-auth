# Multi-Tenant Authentication with NextAuth.js 

This project demonstrates multi-tenant authentication using NextAuth.js . Users can sign in once and access multiple tenants, each represented as subdirectories.

## Table of Contents

- [Setup and Installation](##setup-and-installation)
- [Running the Application](##running-the-application)
- [Deployment to Vercel](#deployment-to-vercel)
- [How the Application Works](#how-the-application-works)
- [Additional Information](#additional-information)

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/Rithingithub/next-auth
   cd next-auth
   ```
   
2. Install the required Node.js modules:
   
    ```
    npm install
    
    ```

3. Create a .env file in the root directory and copy the content from .env.example:

   ```
   cp .env.example .env
   
   ```
   Edit the .env file to specify your MongoDB URI and other environment variables.
   
## Running the Application

To run the application locally, use the following command:
```
npm run dev

```
The application will be accessible at `http://localhost:3000`.

## Deployment to Vercel
The app is deployed in vercel https://next-auth-8074jdw0o-rithingithub.vercel.app/. You can try the working form of the app.


## How the Application Works
* When you visit `http://localhost:3000`, it automatically redirects you to `/auth/signin`.
* The application stores cookies for authentication.
* This app includes multi-tenant authentication. You can change the roles according to the needs and priorities to the platform
* After completing the sign-in process, users can navigate to `/admin`.

## Additional Information
* For more details on NextAuth.js, refer to the [NextAuth.js](https://next-auth.js.org/) Documentation.
* Explore the code and project structure for additional information about the application's features and customization options.
<br>
<br> 
Feel free to reach out with any questions or issues!
<br>
Happy coding!
