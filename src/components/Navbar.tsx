import { LanguageSwitcher } from "./LanguageSwitcher"

export function Navbar(){

    return (
        <header>
            <div className="w-full mx-auto text-right px-4 py-4">
                <span>

                {/* #<h2>Bookstore App</h2> */}
                <LanguageSwitcher/>


                </span>


            </div>
        </header>
    )
    
}