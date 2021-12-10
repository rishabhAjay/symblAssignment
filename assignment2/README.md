## Important Points to Note

1. **Packages used**

- **dotenv**(for your environment variables)
- **express**
- **mongoose**(library for MongoDB)

2. Connect to your **MongoDB database**. You can either use the local instance or use a cloud service provider like **MongoDB Atlas**. Here I will be using MongoDB Atlas so create a `.env` file to hide your MongoDB URL.
   ```
   MONGO_URL=YOUR MONGODB URL
   ```
3. Run the API locally using either `nodemon mainFile.js` or `node mainFile.js`. You can then test the endpoints with **Postman** or **Thunder Client**.
