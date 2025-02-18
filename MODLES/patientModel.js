import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patient_id:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
});

export default mongoose.model("patient", patientSchema);


