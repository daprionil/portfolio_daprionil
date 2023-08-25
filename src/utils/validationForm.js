//* Type Errors by indetify Error from Form
const messageFieldError = {
    fullname: 'El nombre no es válido, agrega más de 5 carácteres',
    email: 'El email no es válido',
    country: 'País no es válido, Agrega un cantidad de carácteres mayor a 5',
    description: 'La descripción no es válida, Agrega un cantidad de carácteres mayor a 50'
};

//! Functions to validate each field
const objectFieldValidate = {
    fullname:val => {
        return val.length >= 5
    },
    email: val => {
        // eslint-disable-next-line no-useless-escape
        const rx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'g');
        const validateEmail = rx.test(val);
        return val.length >= 5 && validateEmail;
    },
    country:val => {
        return val.length >= 5
    },
    description:val => {
        return val.length >= 50
    }
}

function validationForm(objectFields){
    return Object.entries(objectFields).reduce((init, [key,val]) => {
        const validationExist = objectFieldValidate[key];
        if(validationExist){
            const resultValidation = validationExist(val);
            return {
                ...init,
                [key]:!resultValidation ? messageFieldError[key] : null
            }
        }
        return {...init, [key]:null};
    },{});
}

export default validationForm;