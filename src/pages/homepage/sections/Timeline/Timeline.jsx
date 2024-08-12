import Event from './Components/Event';
import Events from './Events';

export default function Timeline() {

    return (
        <div>
            {
                Events.map((eventModel) => {
                    return <Event key={eventModel.title} event={eventModel}/>
                })
            }    
        </div>
    );
}