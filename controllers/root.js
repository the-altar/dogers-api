exports.default = (req, res) => {
    return res.sendFile('index.html', { root: './public/vue-page' });
} 