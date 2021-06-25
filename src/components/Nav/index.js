import React from 'react'

function Nav(props) {
    const {navCategories, setCurrentCategory} = props;

    return (
        <header className="flex-row flex-spaceBetween navBar">
            <ul>
                {navCategories.map((category) => (
                    <li className="navItem" key = {category.name}>
                        <a
                            className="navLink"
                            href={`#${category.name}`}
                            onClick={()=>{
                                setCurrentCategory(category.name)
                            }}
                        >
                        {category.text}    
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Nav