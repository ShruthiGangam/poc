import express  from 'express';
import dotenv from "dotenv";
import doctorRoute from './ROUTES/doctorRoute.js';
import patientRoute from './ROUTES/patientRoute.js';
import appointmentRoute from './ROUTES/appointmentRoute.js';
import {connectdb} from "./MODLES/connection.js"

dotenv.config()
    
const app= express();
app.use(express.json());

const port =process.env.PORT;
    
app.use(express.json());
app.use('/doctor',doctorRoute)
app.use('/patient',patientRoute)
app.use('/appointment',appointmentRoute)
    
connectdb();
    
app.listen(port,()=>{
console.log(`listening ${port}`);
})