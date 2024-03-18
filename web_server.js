const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.use((req,res,next) => {
  console.log(`${req.method} ${req.path}`);
  next()
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, './public')))
app.use('/subdir', express.static(path.join(__dirname, './public')))

app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/employees', require('./routes/api/employees'))

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log("server running on 3500"));
