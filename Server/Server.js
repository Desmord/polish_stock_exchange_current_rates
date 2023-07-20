const express = require(`express`)
const cors = require(`cors`)
const path = require('path');

const webRoutes = require(`./Routes/WebRoutes`);

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../Client/build')));


app.use(`/api/webData/`, webRoutes);


const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 8000}`);
});