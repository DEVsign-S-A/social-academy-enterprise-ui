import '../Components/sidebar/style.css'
import bus from '../Assets/UI_Validate/04.svg'
const ValidateScreen = () => {
  return (
    <div className=" select-none overflow-hidden fixed content-image bg-WhiteSocial z-50 w-full h-screen md:hidden">
      <p
       className='font-Montserrat text-2xl text-gray-700 font-semibold p-5 text-center'
      >
        Actualmente la plataforma se esta adaptando a dispositivos moviles
      </p>
        <img
          src={bus}
          alt='banner'
          className='w-screen p-10'
        />
    </div>
  );
};

export default ValidateScreen;
