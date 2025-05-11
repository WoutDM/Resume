export default function Event({event}) {
    return (
        <div className="flex flex-row w-7/12">
            <div className="w-[14%] mt-1">
                {event.fromDate} - <br/> {event.toDate != null ? event.toDate : 'CURRENT'}
            </div>
            <div className="flex flex-col items-center w-12 mr-5">
                <div className="rounded-full border-2 border-[#00ADB5] bg-[#00ADB5] h-6 w-6"/>
                {
                    event.fromDate === 'September 2020' ?
                        <div className="w-0.5 h-[80%] bg-gradient-to-b from-[#00ADB5]"/>
                    :
                        <div className="w-0.5 h-[90%] bg-[#00ADB5]"/>
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