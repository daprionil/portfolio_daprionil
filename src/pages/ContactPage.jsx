function ContactPage() {
    return (
        <section className="h-full shadow-inner-white flex gap-3 items-center justify-center flex-col p-2 bg-red-500 text-white">
            <h1 className="font-bold text-5xl">Contactame</h1>
            <article className="max-w-[700px] w-full p-2">
                <form className=" flex flex-col gap-3">
                    <label htmlFor="fullname" className="text-xl font-bold">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="bg-white bg-opacity-90 p-3"
                            placeholder="Nombre Completo"
                        />
                    </label>
                    <label htmlFor="email" className="text-xl font-bold">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-white bg-opacity-90 p-3"
                            placeholder="Correo Electrónico"
                        />
                    </label>
                    <label htmlFor="country" className="text-xl font-bold">
                        <input
                            type="text"
                            name="country"
                            id="country"
                            className="bg-white bg-opacity-90 p-3"
                            placeholder="De donde eres?, Pais"
                        />
                    </label>
                    <label htmlFor="description" className="text-xl font-bold">
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                            className="bg-white bg-opacity-90 p-3"
                            placeholder="Escribeme una Nota!">
                            </textarea>
                    </label>
                    <label htmlFor="">
                        <input
                            type="submit"
                            value="Enviar"
                            className="btn bg-blue-400 w-full text-2xl"
                        />
                    </label>
                </form>
            </article>
        </section>
    );
}

export default ContactPage;