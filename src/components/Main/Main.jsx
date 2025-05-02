import mainImage from '../../images/undraw_two-factor.png';
console.log(mainImage);

const Main = () => {
    return (
       <section className="text-white px-4 py-12 md:px-6 md:py-16 lg:px-10 lg:py-20 mb-16">
         <div className="flex flex-col md:flex-row">
         <div className="p-4 w-full md:w-1/2 text-left">
           <h1 className="font-bold text-4xl my-4"> 24/7 Cyber Security Operation Center</h1>
           <p className="mb-4 text-blue-300">Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>
                <button className="mt-3 bg-blue-700 text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-gray-900 transition">
                  Get Started
                </button>
            </div>
        </div>
        <div className="p-4 w-full md:w-1/2">
           <img src={mainImage} alt="" />
        </div>
         </div>
      </section>
    );
  }
  
  export default Main;