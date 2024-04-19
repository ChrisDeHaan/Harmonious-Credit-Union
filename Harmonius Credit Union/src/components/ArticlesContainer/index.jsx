import HollowButton from "../Buttons/HollowButton"

export default function ArticleContainer({ text }) {
    return (
        <>
            <div className="rounded-2xl bg-slate-50 shadow-md h-auto p-2">
                <h1 className="font-bold text-indigo-800 my-2">Lorem, ipsum.</h1>
                <h2 className="font-bold text-2xl">Lorem ipsum dolor sit.</h2>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit voluptatibus necessitatibus?</p>
                <div className="text-center mb-2">
                    <HollowButton text={text} />
                </div>
            </div>
        </>
    )
}