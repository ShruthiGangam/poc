import express from "express";
import { getAllAppointments, getAppointmentById, createAppointment,getAppointmentsByDoctorId,getAppointmentsByPatientId,deleteAppointment } from "../CONTROLLER/appointmentController.js";
const appointmentRoute= express.Router();
//import { validateToken } from "../midddleware/validateToken.js";


//router.use(validateToken)


appointmentRoute.get("/", getAllAppointments);
appointmentRoute.get("/:id", getAppointmentById);
appointmentRoute.post("/", createAppointment);
appointmentRoute.get("/doctor/:id", getAppointmentsByDoctorId);
appointmentRoute.get("/patient/:id", getAppointmentsByPatientId);
appointmentRoute.delete("/:id", deleteAppointment);



export default appointmentRoute;

