const express = require('express'),
app = express(),
port= 3008,
server = app.listen(port,()=>console.log("yo Hsing " + port))
app.use(express.static("public"))