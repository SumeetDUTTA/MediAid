import doctorsDB from "../model/doctorsDB.js";

export const getDoctors = async (req, res) => {
    try {
        const { specialization, location} = req.query;
        const query = {};

        if (specialization) {
            query.specialization = specialization;
        }
        if (location) {
            query.location = location;
        }
        const doctors = await doctorsDB.find(query);
        res.json(doctors);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch doctors"});
    }
};

export const addDoctor = async (req, res) => {
    try {
        const newDoc = new doctorsDB(req.body);
        const savedDoc = await newDoc.save();
        res.status(201).json(savedDoc);
    } catch (error) {
        res.status(500).json({error: "Failed to add doctor"});
    }
}