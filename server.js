const express = require('express');
const cors = require('cors');
const path = require("path");


// const path = require('path');

const app = express();

app.use("/", express.static(__dirname + "/public"));


app.use(cors());
app.use(express.json())

// // load static
// app.use(express.static(path.join(__dirname, 'public')));

// // handle req and send to client saide React
// app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // });
  
  // const PORT = process.env.PORT || 5000;
  // app.listen(PORT, () => {
    //   console.log(`Server is running on PORT ${PORT}`);
    // });
    
app.listen(3001, () => {
  console.log("run on port 3001");
});

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.static(path.join(__dirname, "frontend/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});