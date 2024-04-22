import "./style.css"

export default function HollowButton ({text}) {
    return (
        <>
            <button className="text-indigo-800 font-bold py-3 w-32 mx-auto rounded-xl border-2 border-indigo-800" id="hollowBtn">{text}</button>
        </>
    )
}