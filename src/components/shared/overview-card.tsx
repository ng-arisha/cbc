function OverviewCard({index,stage,description}: {index: number, stage: string, description: string}) {
    return (
        <div className={`p-4 border-l-2  bg-success-content rounded-lg shadow ${index % 2 === 0 ? ' border-l-success animate-fadeInLeft' : 'animate-fadeInRight border-l-error'}`}>
            <div className="h-10 w-10 mb-4 rounded-full bg-success flex items-center justify-center my-2 text-white">
                <span className="text-2xl font-bold ">{index}</span>
            </div>
            <h4 className="font-bold text-sm py-2 text-start">{stage}</h4>
            <p className="text-start text-primary-content">{description}</p>
        </div>
    )
}

export default OverviewCard
