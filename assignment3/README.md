## Important Points to Note

1. **Packages used**

- **axios** (for calling the API)
- **json-server**(for setting up a fake JSON REST API)

2. For setting up **json-server**, create a file called `db.json` in your root directory. Do this after you build the initial react app and install the dependencies. This will act as your **backend**.

  ```json
  {
    "data": [
      {
        "id": 1,
        "name": "Item 1"
      },
      {
        "id": 3,
        "name": "Item 3"
      },
      {
        "id": 2,
        "name": "Item 2"
      },
      {
        "id": 4,
        "name": "Item 4"
      }
    ]
  }
  ```
3. You can run the json-server by typing `json-server --watch db.json --port 5000` on your terminal . **Make sure you install json-server globally first(`npm i -g json-server`)**.

4. You can now run the app with `npm start`.
