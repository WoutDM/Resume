import SkillRating from "./Components/SkillRating";

export default function SkillRatings() {

    return (
        <div id="skills" className='flex flex-col mt-1 w-[800px] max-[960px]:w-full max-[960px]:max-w-[410px] max-[960px]:px-10 mb-10'>
            <div className="flex flex-row max-[960px]:flex-col justify-between">
                <div className="w-[47%] max-[960px]:w-full max-[960px]:mb-7">
                    <h2 className="font-extrabold border-b-2 mb-2 pb-2 border-[#24CBFF]">Coding</h2>
                    <SkillRating skill={'HTML'} rating={5}></SkillRating>
                    <SkillRating skill={'CSS'} rating={4}></SkillRating>
                    <SkillRating skill={'Tailwind'} rating={4}></SkillRating>
                    <SkillRating skill={'React'} rating={3}></SkillRating>
                    <SkillRating skill={'Angular'} rating={4}></SkillRating>
                    <SkillRating skill={'Javascript'} rating={4}></SkillRating>
                    <SkillRating skill={'Typescript'} rating={4}></SkillRating>
                    <SkillRating skill={'C#'} rating={4}></SkillRating>
                    <SkillRating skill={'Java'} rating={3}></SkillRating>
                    <SkillRating skill={'Kotlin'} rating={2}></SkillRating>
                    <SkillRating skill={'Python'} rating={3}></SkillRating>
                    <SkillRating skill={'SQL'} rating={4}></SkillRating>
                    <SkillRating skill={'PL/SQL'} rating={4}></SkillRating>
                </div>
                <div className="w-[47%] max-[960px]:w-full">
                    {/* languages and others */}
                    <div className='max-[960px]:mb-7'>
                        <h2 className="font-extrabold  border-b-2 mb-2 pb-2 border-[#24CBFF]">Languages</h2>
                        <SkillRating skill={'Dutch'} rating={5}></SkillRating>
                        <SkillRating skill={'English'} rating={4}></SkillRating>
                        <SkillRating skill={'French'} rating={3}></SkillRating>
                        <SkillRating skill={'German'} rating={2}></SkillRating>
                        <SkillRating skill={'Spanish'} rating={1}></SkillRating>
                        <SkillRating skill={'Italian'} rating={'Duolingo'}></SkillRating>
                    </div>
                    <div>
                        <h2 className="font-extrabold mt-6  border-b-2 mb-2 pb-2 border-[#24CBFF]">Others</h2>
                        <SkillRating skill={'Photoshop'} rating={3}></SkillRating>
                        <SkillRating skill={'Premiere Pro'} rating={3}></SkillRating>
                        <SkillRating skill={'After Effects'} rating={3}></SkillRating>
                        <SkillRating skill={'Word'} rating={2}></SkillRating>
                        <SkillRating skill={'Excel'} rating={2}></SkillRating>
                    </div>
                </div>
            </div>
        </div>
    );
}