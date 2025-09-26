const express = require ('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json([{
        id:1,
        name: 'Campanha do Agasalho'
    }]);
});

module.exports = router;
