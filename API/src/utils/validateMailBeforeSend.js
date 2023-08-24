module.exports = function({ email, fullname, country, textHtml}){
    const values = Object.entries({ email, fullname, country, textHtml});
    const fieldsInvalids = [];
    const validateEmptyValues = values.some(([field, val]) => {
        const validateField = validateEmptyInputValue(val);
        if(!validateField){
            fieldsInvalids.push(field);
        }
        return validateField;
    });

    if(validateEmptyValues) return new Error(`The values are not valid [${fieldsInvalids.toString()}]`);
};

function validateEmptyInputValue(val){
    const MIN_LENGTH = 5;
    return val !== '' && val.length > MIN_LENGTH && typeof val === 'string';
}