import mainImage from '../../images/computer.png';
import { FaCheckCircle } from "react-icons/fa";
console.log(mainImage);

const Workflow = () => {

    const items = [
        "Aute irure dolor in reprehenderit in voluptate velit esse mollitia.",
        "Dolore eu fugiat nulla pariatur excepteur sint occaecat distincto.",
        "Non proident, sunt in culpa qui officia deserunt mollit assumea.",
        "Laborum incidunt ut labore et dolore magnam rugiat occaecai.",
      ];

    return (
       <section className="text-white px-4 py-12 md:px-6 md:py-16 lg:px-10 lg:py-20">
         <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
            <img src={mainImage} alt="" />
            </div>
            <div className="p-4 w-full md:w-1/2 text-left">
            <h3 className="text-xl text-blue-300 uppercase mb-4">Who we are</h3>
            <h1 className="font-bold text-4xl my-4"> Reduce Risk of Your <br/> Workflow Be Productive </h1>
            <p className="mb-4 text-blue-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
            <ul className="space-y-3">
        {items.map((text, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-blue-300">
            <FaCheckCircle className="mt-1 text-sky-500" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
            </div>
         </div>
      </section>
    );
  }
  
  export default Workflow;