async function sendMail({fullname, email, country, description:textHtml}){
    const objFieldsValue = {fullname, email, country, textHtml};
    
    //! Validate empty values
    const validateEmptyFields = Object.values(objFieldsValue).some( v => !v);
    if(validateEmptyFields) throw new Error('Ha ocurrido un error, faltan campos');

    //! Send mail proccess
    const optionsFetch = {
        method: 'POST',
        headers:{
            'Content-Type':'json/application'
        },
        body: JSON.stringify(objFieldsValue)
    };
    const response = await fetch(`${import.meta.env.VITE_URL_API}/mailer`,optionsFetch);
    const data = await response.json();

    console.log(data);

    return objFieldsValue
}

export default sendMail;