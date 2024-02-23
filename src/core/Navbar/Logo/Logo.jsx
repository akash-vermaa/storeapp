import Image from "next/image";

const Logo = ()=> {
    return(
        <div className="w-[120px] h-[56px] bg-red-300 flex flex-col justify-center items-center">
            <Image 
                src="/vercel.svg" 
                alt="logo.svg" 
                width={100} 
                height={100}
                className="bg-green-200"
            />
            <p></p>
        </div>
    );
}

export default Logo;