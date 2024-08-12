export default function Event({event}) {

    console.log(event);
    return (
        <div>
            <div className="text-white">
                {event.title}
            </div>
        </div>
    );
}