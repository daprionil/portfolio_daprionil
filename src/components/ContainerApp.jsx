function ContainerApp({children}) {
    return (
        <div className="bg-slate-800 [&>section:nth-child(1)]:pt-28">
            {children}
        </div>
    );
}

export default ContainerApp;