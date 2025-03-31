import { ChevronDownIcon } from "@heroicons/react/24/outline";
import homeImage from "/src/assets/images/home.jpg";
import Logo from "/src/assets/images/logo.svg";


const Home = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={homeImage}
                    alt="Background"
                    className="w-full h-full object-cover brightness-60"
                />
            </div>

            {/* Logo Content */}
            <div className="relative z-10 flex flex-col h-full items-center justify-center px-6">
                <div className="container mx-auto ">
                    {/* <h1 className="text-6xl md:mx-26 sm:text-6xl md:text-[140px] lg:text-[170px] xl:text-[240px] font-[800] logo-text">
                        vinbone.
                    </h1>
                    <p className="md:mx-26 secondary-text sm:text-lg md:text-2xl lg:text-3xl xl:text-[50px]">
                        Decors | Interiors
                    </p> */}

                    <img className="md:w-7xl" src={Logo} alt="Logo" />


                </div>

                {/* Scroll Down Section */}
                <div className="absolute bottom-16 flex flex-col items-center">
                    <h1 className="logo-text text-xl font-[300]">Scroll down</h1>
                    <ChevronDownIcon style={{ animation: "bounce 2s infinite" }} className="w-7 h-7 mt-2 text-white animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default Home;
