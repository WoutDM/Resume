import './Event.css'

export default function Event({event}) {
    return (
        <div id='container' className="flex flex-row w-7/12">
            <div id='period' className="w-[150px] mt-1">
                {event.fromDate} - <br/> {event.toDate != null ? event.toDate : 'CURRENT'}
            </div>
            <div id='periodTimeline' className="flex flex-col items-center w-12 mr-5">
                <div className="rounded-full border-2 border-[#24CBFF] bg-[#24CBFF] h-6 w-6"/>
                {
                    event.fromDate === 'September 2014' ?
                        <div className="w-0.5 h-[80%] bg-gradient-to-b from-[#24CBFF]"/>
                    :
                        <div className="w-0.5 h-full bg-[#24CBFF]"/>
                }
            </div>
            <div className="w-9/12">
                <p id='periodSmall' className='hidden'>{event.fromDate} - {event.toDate != null ? event.toDate : 'CURRENT'}</p>
                <h2 id='title' className="font-bold">{event.title}</h2>
                <p id='location' className="text-xs text-gray-400 mb-2">{event.location}</p>
                {
                    event.fromDate === 'September 2014' ?
                        <p id='description' className="mb-14">{event.description}</p>
                    :
                        <p id='description' className="mb-10">{event.description}</p>
                }
            </div>
        </div>
    );
}