function ContainerApp({children}) {
    return (
        <div className="bg-slate-800 md:[&>section:nth-child(1)]:pt-24 ">
            {children}
        </div>
    );
}

export default ContainerApp;