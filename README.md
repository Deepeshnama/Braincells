User Management API:-
This is a simple Express.js API that fetches user data from an external API, filters users by name, and sorts them in ascending or descending order.

Features:-
1. Fetch all users from an external API
2. Filter users by name (case-insensitive)
3. Sort users in ascending or descending order

Technologies Used
1. Node.js
2. Express.js
3. Axios
4. dotenv

API Endpoints:-

1. Get all users ==>

URL: /api/users
Method: GET
Query Parameters:

name - Filter users by name
sort - Sort users by name (asc or desc)

example ==>   GET http://localhost:2500/api/users?name=Leanne&sort=asc

2. Fetch users directly from API
   
URL: /api/get
Method: GET



Project Structure:-
.
--controllers
-- user.controller.js
--routes
   --user.route.js
-- .env
-- index.js
-- package.json
-- README.md
