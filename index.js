const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/',(request,response)=> {
  response.send("Welcome");
})

app.get('/info',(request,response)=> {

    const Notes = [{
        text:"HomeWork",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw",
    },
    {
        text:"Watch TV",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw",
    },
    {
        text:"HomeWork",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw",
    },
    {
        text:"Watch TV",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw",
    },
    {
        text:"HomeWork",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw",
    },
    {
        text:"Watch TV",
        link: "https://www.youtube.com/watch?v=E8vYlkx9EQw",
    },
]

    response.json({
        Notes,
    });
})

app.listen(port,()=> {
    console.log(`Notes Backend app running on port ${port}`);
})