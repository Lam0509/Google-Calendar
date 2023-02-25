import express from 'express';
import fileUpload from "express-fileupload";
import {AppDataSource} from "./src/data-source";
import AuthRouter from "./src/routers/auth.router";
require('dotenv').config();

const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

app.use(
    fileUpload({
        createParentPath: true,
    })
);
app.use(express.json());
app.use("/api/auth", AuthRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("App running on port: " + process.env.APP_PORT)
})
