
const { Router } = require("express");
const router = Router();
const axios=require('axios')
router.get("/posts", async (req, res) => {
   await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
  
        // Save the posts to the MongoDB database
        Post.insertMany(posts, (error) => {
          if (error) {
            return console.error(error);
          }
          console.log("Posts saved to the database");
        });
  
        res.send("Posts fetched and saved to the database");
      })
      .catch((error) => {
        console.error(error);
        res.send("Error fetching posts");
      });
  });

  module.exports = router