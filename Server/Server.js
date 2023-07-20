const express = require(`express`)
const cors = require(`cors`)
const path = require('path');
// const mongoose = require(`mongoose`)
// const webRoutes = require(`./Server_src/Routers/WebDataRoutes`);
// const dataBaseRoutes = require(`./Server_src/Routers/DataBaseRoutes`);
const webRoutes = require(`./Routes/WebRoutes`);


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../Client/build')));



app.use(`/api/webData/`, webRoutes);
// app.use(`/api/dataBase/`, dataBaseRoutes);



// mongoose.connect(`mongodb+srv://gym_booking:gym_booking@cluster0.pv477hr.mongodb.net/Stocks?retryWrites=true&w=majority`, {});
// const db = mongoose.connection;

// db.once('open', () => console.log('Connected to the database'));
// db.on('error', err => console.log('Error ' + err));



const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 8000}`);
});