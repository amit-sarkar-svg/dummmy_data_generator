const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const emp = require("./modals/emp");

// MongoDB connection with error handling
mongoose.connect("mongodb://127.0.0.1:27017/comp")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * arr.length);
    return arr[rno];
}

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

let randomnames = ["Soham" , "Sangam" , "Priya" , "pukit", "aman"]
let randomlang = ["python", "js", "java", "c++"]
let randomcity = ["kolkata", "west carolyna", "texas", "california"]

app.get("/generate", async (req, res) => {
    try {
        console.log("Starting data generation...");
        
        // clear the collection
        await emp.deleteMany({});
        console.log("Collection cleared");

        //generate random data
        for (let index = 0; index < 10; index++) {
            const employeeData = {
                name: getRandom(randomnames),
                salary: Math.floor(Math.random() * 22000),
                language: getRandom(randomlang),
                city: getRandom(randomcity),
                isManager: (Math.random() > 0.5) ? true : false,
            };
            
            console.log(`Creating employee ${index + 1}:`, employeeData);
            let e = await emp.create(employeeData);
            console.log(`Employee ${index + 1} created:`, e._id);
        }
        
        console.log("Data generation completed successfully");
        res.json({ message: "Data generated successfully!", count: 10 });
    } catch (error) {
        console.error("Error generating data:", error);
        res.status(500).json({ error: "Failed to generate data", details: error.message });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
