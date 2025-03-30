import Event from './Components/Event';
import Events from './Events';

export default function Timeline() {

    return (
        <div id="timeline" className='flex flex-col items-center mt-60'>
            <h1 id="timeline" className="m-auto font-bold text-3xl mb-10 select-none">Timeline<span className="text-[#D6F919]">.</span></h1>
            {
                Events.map((eventModel) => {
                    return <Event key={eventModel.title} event={eventModel}/>
                })
            }    
        </div>
    );
}