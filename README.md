*CropCare Frontend Documentation*

Welcome to the CropCare Frontend Documentation! This guide will walk you through the features and functionality of the CropCare web application, which is built using Angular as the frontend framework.

*1. Landing Page:*
The landing page serves as an introduction to CropCare, showcasing the company's mission and values. Here's a snippet of the content:

"At CropCare, we believe in harnessing the power of technology to revolutionize modern farming practices. Established with a passion for innovation and a commitment to sustainable agriculture, CropCare is dedicated to empowering farmers with cutting-edge solutions that enhance efficiency, productivity, and environmental stewardship."

The landing page also features a call-to-action (CTA) inviting users to explore the platform further.

*2. Dashboard Page:*
The dashboard page provides users with a comprehensive overview of their farming operations. It features a tab navigator with three tabs: Fertilizer, Electrical, and Water.

- *Fertilizer Tab:* Displays information about fertilizer-related sensors, including Soil Moisture Sensor, pH Sensor, and Humidity Sensor.
- *Electrical Tab:* Provides data from electrical sensors such as Temperature Sensor, Light Sensor, and Conductivity Sensor.
- *Water Tab:* Shows details from water-related sensors like Rainfall Sensor, Humidity Sensor, Soil Moisture Sensor, and Flow Control Sensor.

Users can navigate between these tabs to access specific information based on their farming needs.

*3. Authentication:*
Access to the dashboard page is restricted to authenticated users. Users must either sign up for a new account or sign in with their existing credentials before accessing the dashboard. This ensures data privacy and security for users' farming information.

*4. Local Deployment:*
To run the CropCare project locally, follow these steps:
1. Clone the project from the CropCare GitHub Repository: [CropCare GitHub Repository](https://github.com/CropCare/CropCare-App)
   
   git clone https://github.com/CropCare/CropCare-App.git
   

2. Navigate to the project directory:
   
   cd CropCare-App
   

3. Install project dependencies:
   
   npm install
   

4. Start the local development server:
   
   ng serve
   

5. Open your web browser and navigate to http://localhost:4200 to view the CropCare application running locally.

### Note: Make sure you have Node.js and npm installed on your system before running the above commands. If not, you can download and install them from the official Node.js website: [Node.js](https://nodejs.org/). The project also uses Angular CLI version 17.1, which can be installed globally using the following command: `npm install -g @angular/cli@17.1`.




*5. Resources:*
For further information and support, please refer to the following resources:
CropCare Web App: https://cropcare.vercel.app/
CropCare GitHub Repository: https://github.com/CropCare/CropCare-App