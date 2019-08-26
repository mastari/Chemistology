const express = require("express")

const app = express();

app.get('/api/shit', (req,res)=>{
    const shit = [
        {Name: "Eli", Occupation: "Spraying hose pee"}
    ]
    res.json(shit);
})

const port = 5000;

app.listen(port, ()=>console.log(`Listening on port ${port}`))