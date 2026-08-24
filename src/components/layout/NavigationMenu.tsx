import {Equal} from "lucide-react";
import {useState} from "react";

const NavigationMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div
            className={` ${isOpen && "cursor-pointer border shadow-2xl"} border-neutral-200 p-2 rounded-full flex flex-col justify-center w-fit max-w-fit transition-all duration-800`}
        >
            <button
                type="button"
                onClick={toggleOpen}
                className={"default-button cursor-pointer flex flex-row min-w-fit w-full gap-2 items-center justify-center"}>
                <div className={"relative flex h-4 w-4 flex-col items-center justify-center gap-1"}>
                    <div
                        className={`h-0.5 w-4 rounded-full bg-black transition-all duration-300 ${isOpen ? "translate-y-0.75 rotate-45" : ""}`}/>
                    <div
                        className={`h-0.5 w-4 rounded-full bg-black transition-all duration-300 ${isOpen ? "-translate-y-0.75 -rotate-45" : ""}`}/>
                </div>
                <span
                    className={`whitespace-nowrap overflow-hidden max-w-0 opacity-0 -translate-x-4 ${isOpen && "max-w-40 opacity-100 translate-x-0"} transition-all duration-500`}>menu</span>
            </button>
            {isOpen && (<div>
                <div>

                </div>
            </div>)}
        </div>
    )
}

NavigationMenu.displayName = "NavigationMenu";
export default NavigationMenu;