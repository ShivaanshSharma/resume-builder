
import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <header className="bg-gray-700 p-6 justify-center items-center flex flex-row gap-2">
        <img src={logo} className='h-12'/>
      <span
        className="text-white font-bold text-3xl lg:text-4xl"
      >
        CraftMyCV
      </span>
    </header>
  );
};
