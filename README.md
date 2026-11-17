# Places-App

Prerequisites:
--------------------------
1. Web Browser

2. Access to a terminal

3. MariaDB server is installed and the Database is configured

Running the software:
--------------------------
1. Navigate to to the server folder and install dependencies
    (cd server; npm i -y)

2. Navigate to the places-app folder and install dependencies
    (cd places-app; npm i -y)

3. Run the program from both folders
    (npm run dev;) **Both folders separately**

4. Copy the localhost URL that appears in the places-app terminal and paste it to your browser search bar

Verifying, cleaning up and fixing the code:
--------------------------
1. Run ESlint (npm run lint)

2. Fix minor issues (npm run lint:fix)

3. Locate and identify major issues in terminal output. Example: "24:5  error  Error: Calling setState synchronously within an effect can trigger cascading renders"