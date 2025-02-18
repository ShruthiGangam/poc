import mongoose from "mongoose";
import doctor from "../MODLES/doctorModel.js";  
import patient from "../MODLES/patientModel.js";

const appointmentSchema = new mongoose.Schema({
    appointment_id:{
        type: String,
        required: true,
        unique: true
    },
    doctor_id: {
       type: mongoose.Schema.Types.ObjectId,
      //  type: String,
        ref: 'doctor', // Reference to the Doctor model
    },
    patient_id: { // Using ObjectId instead of phone number
        //type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: patient, // Reference to Patient model
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
});

export default mongoose.model("appointment", appointmentSchema);
