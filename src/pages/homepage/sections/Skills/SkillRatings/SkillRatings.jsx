import SkillRating from "./Components/SkillRating";

export default function SkillRatings() {

    return (
        <div id="skills" className='flex flex-col mt-1 w-[800px]'>
            <div className="flex flex-row justify-between">
                <div className="w-[47%]">
                    <h2 className="font-extrabold">Coding</h2>
                    <SkillRating skill={'HTML'} rating={5}></SkillRating>
                    <SkillRating skill={'CSS'} rating={5}></SkillRating>
                    <SkillRating skill={'Tailwind'} rating={5}></SkillRating>
                    <SkillRating skill={'React'} rating={4}></SkillRating>
                    <SkillRating skill={'Angular'} rating={3}></SkillRating>
                    <SkillRating skill={'Javascript'} rating={4}></SkillRating>
                    <SkillRating skill={'Typescript'} rating={4}></SkillRating>
                    <SkillRating skill={'C#'} rating={4}></SkillRating>
                    <SkillRating skill={'Java'} rating={4}></SkillRating>
                    <SkillRating skill={'Kotlin'} rating={2}></SkillRating>
                    <SkillRating skill={'Python'} rating={4}></SkillRating>
                    <SkillRating skill={'SQL'} rating={5}></SkillRating>
                    <SkillRating skill={'PL/SQL'} rating={5}></SkillRating>
                </div>
                <div className="w-[47%]">
                    {/* languages and others */}
                    <div>
                        <h2 className="font-extrabold">Languages</h2>
                        <SkillRating skill={'Dutch'} rating={5}></SkillRating>
                        <SkillRating skill={'English'} rating={4}></SkillRating>
                        <SkillRating skill={'French'} rating={3}></SkillRating>
                        <SkillRating skill={'Germany'} rating={2}></SkillRating>
                        <SkillRating skill={'Spanish'} rating={1}></SkillRating>
                        <SkillRating skill={'Italian'} rating={'Duolingo (2 years ago (oops))'}></SkillRating>
                    </div>
                    <div>
                        <h2 className="font-extrabold mt-6">Others</h2>
                        <SkillRating skill={'Photoshop'} rating={3}></SkillRating>
                        <SkillRating skill={'Premiere Pro'} rating={3}></SkillRating>
                        <SkillRating skill={'After Effects'} rating={3}></SkillRating>
                        <SkillRating skill={'Word'} rating={2}></SkillRating>
                        <SkillRating skill={'Excel'} rating={2}></SkillRating>
                        <SkillRating skill={'Crypto/Stock trading'} rating={4}></SkillRating>
                    </div>
                </div>
            </div>
        </div>

    );
}