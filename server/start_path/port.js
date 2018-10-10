module.exports = app => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`server start on port ${PORT}`);
    });
};