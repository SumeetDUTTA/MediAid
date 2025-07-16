export const sendAlert = (req, res) => {
    const { contactNumber } = req.body;

    console.log(`Alert sent to ${contactNumber}`);
    res.status(200).json({ message: 'Alert sent successfully' });
}