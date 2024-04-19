import Button from "../../../Buttons/Button"

export default function LearnMoreContainer() {
    return (
        <>
            <div className="rounded-2xl bg-indigo-50 shadow-md w-auto h-auto grid items-center">
                <div className="mx-1 p-2">
                    <h1 className="font-bold">Lorem, ipsum.</h1>
                    <h2 className="py-3 font-thin text-3xl">Lorem ipsum dolor sit.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.</p>
                    <div className="grid lg:grid-cols-2 pt-3 items-center">
                        <Button text="Apply Now"/>
                        <a href="" className="underline mx-auto">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}