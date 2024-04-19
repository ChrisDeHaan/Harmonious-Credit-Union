import "./style.css"

export default function Button ({text}) {
    return (
        <>
            <button className="bg-indigo-600 text-white font-bold py-3 w-32 mx-auto rounded-xl" id="btn">{text}</button>
        </>
    )
}