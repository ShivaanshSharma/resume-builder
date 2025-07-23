
import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#1f1f1f] via-[#2c3e50] to-[#34495e] p-6 justify-center items-center flex flex-row gap-3">
        <img src={logo} className='h-10'/>
      <span
        className="text-white font-bold text-3xl lg:text-4xl"
      >
        CraftMyCV
      </span>
    </header>
  );
};
