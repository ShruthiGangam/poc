import patient from "../MODLES/patientModel.js";  


const getPatientDetails=async (req,res)=>{
    try{
        const patients= await patient.find().sort({ name: 1 }).select("-_id").select("-__v");
        const count = await patient.countDocuments();
        if(patients.lenght==0){
            console.log("no data patient records available")
            res.status(401)
        }
        res.status(200).json({
            totalpatients: count,
            patients: patients
        });
    }catch(error) {
        console.error("Error fetching patient details:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const createPatient = async (req, res) => {
    try {
        const { patient_id, name, phoneNumber } = req.body;
        if (!patient_id || !name ||  !phoneNumber) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newpatient = await patient.create({
            patient_id,
            name,
            phoneNumber
        });

        res.status(201).json({ message: "patient created successfully", patient: newpatient });
    } catch (error) {
        console.error("Error creating patient:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const getPatientDetail = async (req, res) => {
    try {
        const pai = await patient.findOne({ patient_id: req.params.id });

        if (!pai) {
            return res.status(404).json({ message: "patient not found" });
        }

        res.status(200).json(pai);
    } catch (error) {
        console.error("Error fetching patient details:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const updatePatient = async (req, res) => {
    try {
        const pai = await patient.findOne({ patient_id: req.params.id });

        if (!pai) {
            return res.status(404).json({ message: "Patient not found" });
        }

        const updatedPatient = await patient.findByIdAndUpdate(
            pai._id,
            req.body,
            { new: true, runValidators: true } 
        );
        res.status(200).json(updatedPatient);
    } catch (error) {
        console.error("Error updating patient:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const deletePatient = async (req, res) => {
    try {
        const pai = await patient.findOne({ patient_id: req.params.id });
        
        if (!pai) {
            return res.status(404).json({ message: "Patient not found" });
        }

        await patient.deleteOne({ _id: pai._id }); // Correct syntax for deleteOne
        res.status(200).json({ message: "Patient deleted successfully" });
    } catch (error) {
        console.error("Error deleting patient:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export {getPatientDetails,createPatient,getPatientDetail,updatePatient,deletePatient};