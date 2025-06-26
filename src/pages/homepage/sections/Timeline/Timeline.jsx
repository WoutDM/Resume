import Event from './Components/Event';
import Events from './Events';

export default function Timeline() {

    return (
        <div id="timeline" className='flex flex-col items-center mt-44 max-[1235px]:mt-32'>
            {/*<h1 id="timeline" className="m-auto font-bold text-6xl max-[1235px]:text-4xl mb-10 select-none">Timeline</h1>*/}
            <h1 id="timeline" className="m-auto font-bold text-6xl mb-5 select-none max-[1235px]:text-4xl">Timeline</h1>
            {
                Events.map((eventModel) => {
                    return <Event key={eventModel.title} event={eventModel}/>
                })
            }
        </div>
    );
}