export const Header = () => {
    return(
        <header className="flex bg-primary text-secondary  px-2 py-4 border-b border-secondary">
            <div className="flex items-center w-full max-w-10xl mx-auto justify-between max-w-[120ch]">
                <div className = 'text-bold hover:text-accent'>
                    <a href = '/prlima-site/'>Pedro Reis Lima</a>
                </div>
                <nav>
                    <ul className = "flex item-center gap-4">
                        <li className = "hover:text-accent">
                            <a href = '/prlima-site/academic'>academic</a>
                        </li>
                        <li className = "hover:text-accent">
                            <a href = '/prlima-site/projects'>projects</a>
                        </li>
                        <li>
                            <a download href = "CV/CV-prof Pedro Reis Lima.pdf" className = "flex gap-1 group">
                                <h1 className = "group-has-hover:text-accent">cv</h1> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="my-auto mx-auto w-4 h-4 group-has-hover:text-accent">
                                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}