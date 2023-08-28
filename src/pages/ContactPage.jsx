import { Title } from 'react-head';
import { useState } from 'react';

import validationForm from '../utils/validationForm';
import sendMail from '../controllers/sendMail';
import Loader from '../elements/Loader';
import { ReactComponent as WaveContact } from '../assets/wave_contact.svg';
import { sweetFalse, sweetSuccess } from '../utils/defaultTypeAlerts';

const initialValuesForm = {
    fullname:'',
    email:'',
    country:'',
    description:''
};

function ContactPage() {
    const [ valuesForm, setValuesForm ] = useState(initialValuesForm);
    const [ validationsFields, setValidationsFields ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    const resetState = (set, val) => set(val);

    //!This function is exectute by each input in form
    const handleChangeInput = ({target:{name,value}}) => {
        
        setValuesForm( state => {
            const newStateValuesForm = {
                ...state,
                [name]:value
            };
            //? Validate Values fields form
            const resultValidation = validationForm(newStateValuesForm);
            setValidationsFields(resultValidation);

            return newStateValuesForm;
        })
    };

    //! This fuction will validate the values before sending
    const handleSubmit = async evt => {
        evt.preventDefault();
        const nameRequested = valuesForm.fullname;

        //* Revalidate form width current values
        const resultValidation = validationForm(valuesForm);
        setValidationsFields(resultValidation);

        //! Validate if exist current errors in form
        const validationErrorsExists = Object.values(resultValidation).filter(v => v).length === 0;
        
        //? If Validation is true, then sendEmail
        if(validationErrorsExists){
            resetState(setIsLoading, true);
            
            const responseMail = await sendMail(valuesForm);
            
            //? Set states
            resetState(setIsLoading, false);
            resetState(setValuesForm, initialValuesForm);
            resetState(setValidationsFields, {});
            
            //? Validate if the request is succesful
            const validationSuccessOrDeclined = /ok/i.test(responseMail.response);
            if(validationSuccessOrDeclined){
                sweetSuccess({message:`${nameRequested} tu mensaje ha sido enviado correctamente`});
                return;
            }
            sweetFalse({message:'Ha ocurrido un error, intentalo de nuevo más tarde'});
            return;
        }

        //! Display error alert
        sweetFalse({message:'Debes de solucionar los errores del formulario para continuar'})
    };

    return (
        <section className="min-h-screen md:pt-24 shadow-inner-white bg-yellow-400 flex items-center justify-center text-white relative">
            <Title>Contactame</Title>
            <div className="flex gap-3 items-center h-full justify-center flex-col p-2 w-full">
                <h1 className="title-h1 text-5xl md:pt-0 pt-28">Contactame</h1>
                <article className="max-w-[700px] w-full p-2 z-10">
                    <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
                        <label htmlFor="fullname" className="text-xl font-bold">
                            {
                                validationsFields.fullname && <p className='text-alert error'>{validationsFields.fullname}</p>
                            }
                            <input
                                value={valuesForm.fullname}
                                onChange={handleChangeInput}
                                type="text"
                                name="fullname"
                                className="bg-white bg-opacity-90 p-3"
                                placeholder="Nombre Completo"
                            />
                        </label>
                        <label htmlFor="email" className="text-xl font-bold">
                            {
                                validationsFields.email && <p className='text-alert error'>{validationsFields.email}</p>
                            }
                            <input
                                value={valuesForm.email}
                                onChange={handleChangeInput}
                                type="email"
                                name="email"
                                className="bg-white bg-opacity-90 p-3"
                                placeholder="Correo Electrónico"
                            />
                        </label>
                        <label htmlFor="country" className="text-xl font-bold">
                            {
                                validationsFields.country && <p className='text-alert error'>{validationsFields.country}</p>
                            }
                            <input
                                value={valuesForm.country}
                                onChange={handleChangeInput}
                                type="text"
                                name="country"
                                className="bg-white bg-opacity-90 p-3"
                                placeholder="De donde eres?, Pais"
                            />
                        </label>
                        <label htmlFor="description" className="text-xl font-bold">
                            {
                                validationsFields.description && <p className='text-alert error'>{validationsFields.description}</p>
                            }
                            <textarea
                                name="description"
                                cols="30"
                                rows="10"
                                className="bg-white bg-opacity-90 p-3"
                                placeholder="Escribeme una Nota!"
                                value={valuesForm.description}
                                onChange={handleChangeInput}
                            >
                            </textarea>
                        </label>
                        {
                            isLoading ?
                                <Loader />
                            :   <input
                                    onChange={handleChangeInput}
                                    type="submit"
                                    value="Enviar"
                                    className="btn bg-blue-400 text-2xl mx-auto"
                                />
                        }
                    </form>
                </article>
            </div>
            <div className='absolute bottom-0 w-full'>
                <WaveContact/>
            </div>
        </section>
    );
}

export default ContactPage;