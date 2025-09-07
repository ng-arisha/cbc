function CurriculuCard({title,description}:{title:string,description:string}) {
    return (
        <div className="p-4 bg-success-content rounded-lg shadow">
            <h5 className="text-success text-xl text-start py-2">{title}</h5>
            <p className="text-sm text-start">{description}</p>
        </div>
    )
}

export default CurriculuCard
