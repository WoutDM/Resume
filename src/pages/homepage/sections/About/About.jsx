export default function About() {

  return (
    <div id="about" className="flex flex-col items-center mt-40">
      <h1 className="m-auto font-bold text-3xl select-none">About<span className="text-[#D6F919]">.</span></h1>
      <div className="flex justify-center items-center w-7/12 mt-8">
        <div className="bg-gray-700 w-60 aspect-square rounded-full inline-block">
          {/* image */}
        </div>
        <div className="text-white w-3/5 ml-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing...
        </div>
      </div>
    </div>
  );
}