export const Header = () => {
    return(
        <header className="flex bg-black text-white px-2 py-4">
            <div className="flex items-center w-full mx-auto justify-between">
                <div className = 'text-bold'>
                    <a href = '/'>Pedro Reis Lima</a>
                </div>
                <nav>
                    <ul className = "flex item-center gap-4">
                        <li>
                            <a href = '/prlima/academic'>academic</a>
                        </li>
                        <li>
                            <a href = '/prlima/projects'>projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}