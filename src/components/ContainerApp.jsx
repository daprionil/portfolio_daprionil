function ContainerApp({children}) {
    return (
        <div className="p-2 bg-slate-800 h-screen overflow-y-auto">
            {children}
        </div>
    );
}

export default ContainerApp;