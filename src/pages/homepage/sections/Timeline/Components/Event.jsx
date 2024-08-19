export default function Event({event}) {
    return (
        <div className="flex flex-row w-7/12">
            <div className="w-1/5 mt-1">
                {event.fromDate} - <br/> {event.toDate != null ? event.toDate : 'CURRENT'}
            </div>
            <div className="flex flex-col items-center w-20">
                <div className="bg-gray-900 rounded-full border-2 border-[#D6F919] h-8 w-8"/>
                {
                    event.fromDate === 'September 2020' ?
                        <div className="w-0.5 h-[80%] bg-[#D6F919] relative after:from-[#D6F919] before:absolute before:h-[30%] before:w-full before:bottom-0 before:bg-gradient-to-t before:from-black"/>
                    :
                        <div className="w-0.5 h-[90%] bg-[#D6F919]"/>
                }
            </div>
            <div className="w-9/12">
                <h2 className="font-bold">{event.title}</h2>
                <p className="text-xs text-gray-400">{event.location}</p>
                {
                    event.fromDate === 'September 2020' ?
                        <p className="mb-14">{event.description}</p>
                    :
                        <p className="mb-20">{event.description}</p>
                }
            </div>
        </div>
    );
}