import React from "react"


const Header=()=>{
    return(
        <div className="container-fluid">
        <div  className="flex justify-between py-5">
        <nav>
            <ul className="flex flex-wrap gap-x-7 ">
                <li>Home</li>
                <li>Content</li>
                <li>help</li>
                <li>FAQs</li>
            </ul>
        </nav>
            <ul className="flex flex-wrap gap-x-7">
                <li>My Acount</li>
                <li>USD</li>
                <li>En</li>
            </ul>
        </div>
    </div>
    )
}
export default Header