export default function SkillRating({skill, rating}) {

    let stars = [];
    for (let i = 1; i < 6; i++) {
        if (typeof rating === 'string') {
            stars = rating;
        } else if (typeof rating === 'number') {
            if (i <= rating) {
                stars.push(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 28 28" strokeWidth="1.5"
                         stroke="white" className="w-6 h-6" key={skill+i.toString()}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                )
            } else {
                stars.push(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="1.5"
                         stroke="white" className="w-6 h-6" key={skill+i.toString()}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                )
            }
        }
    }

    return (
        <div className='flex flex-row justify-between items-center w-full'>
            <p>{skill}</p>
            <div className="flex flex-row justify-center items-center">
                {stars}
            </div>
        </div>
    );
}