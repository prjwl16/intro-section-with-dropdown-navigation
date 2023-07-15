import Link from 'next/link';

const Feature = ["Todo List", "Calendar", "Reminders", "Planning"];
const Company = ["History", "Our team", "Blog"];

interface props{
    title :string
}

function Menubar({ title }: props) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">{title}</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {Feature.map((item, index) => (
              <a key={index} className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                {item}
              </a>
          ))}
        </div>
        <div>
          {Company.map((item, index) => (
              <a key={index} className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                {item}
              </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menubar;