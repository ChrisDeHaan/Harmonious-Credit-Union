export default function Header () {
    return (
        <>
            <header className="bg-gradient-to-tr from-violet-600 to-cyan-950 h-32 grid grid-cols-2 items-center rounded-b-xl">
                <div className="text-center text-white font-extrabold text-6xl">
                    <span>Harmon<span className="bg-gradient-to-b from-yellow-300 via-amber-500 to-orange-700 text-transparent bg-clip-text">IOU</span>s</span>
                </div>
                <div className="grid md:grid-cols-3 md:gap-5">
                    <button>button1</button>
                    <button>button2</button>
                    <button>button3</button>
                </div>
            </header>
        </>
    )
}