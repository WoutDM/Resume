import Event from './Components/Event';
import Events from './Events';

export default function Timeline() {

    return (
        <div id="timeline" className='flex flex-col items-center mt-44'>
            <h1 id="timeline" className="m-auto font-bold text-6xl mb-10 select-none">Timeline</h1>
            {
                Events.map((eventModel) => {
                    return <Event key={eventModel.title} event={eventModel}/>
                })
            }    
        </div>
    );
}