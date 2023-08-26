const transporterMailer = require('../controllers/transporterMailer');
const validateMailBeforeSend = require('../utils/validateMailBeforeSend');

module.exports = async function(req,res){
    try {
        const { email, fullname, country, textHtml} = req.body;
        const objEmailValues = { email, fullname, country, textHtml};

        //! Validate email before send
        validateMailBeforeSend(objEmailValues);
        const mailSender = await transporterMailer(objEmailValues);
        
        //! Response by request
        res.json(mailSender);
    } catch ({message}) {
        res.json({error:message});
    }
};