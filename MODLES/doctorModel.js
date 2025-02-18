import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    doctor_id:{
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    }
});

export default mongoose.model("doctor", doctorSchema);
