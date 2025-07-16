

export const checkSymptom = async (req, res) => {
    const { symptoms } = req.body;

    const conditionMap = [
        {keywords: ['fever', 'cough'], condition: 'Flu', specialist: 'General Physician'},
        {keywords: ['chest pain'], condition: 'Angina', specialist: 'Cardiologist'},
        {keywords: ['rash', 'itching'], condition: 'Dermatitis', specialist: 'Dermatologist'},
    ];

    for (const entry of conditionMap) {
        if (entry.keywords.some(k => symptoms.toLowerCase().includes(k))) {
            return res.json({
                condition: entry.condition,
                specialist: entry.specialist
            });
        }
    }

    res.json({ condition: 'Unknown', specialist: 'General Physician' });
}