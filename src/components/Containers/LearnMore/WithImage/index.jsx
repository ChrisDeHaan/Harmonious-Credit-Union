import Button from "../../../Buttons/Button"
import ManPlanting from "../../../../images/man-planting.jpg"

export default function LearnMoreContainerWithImage() {
    return (
        <>
            <div className="rounded-2xl bg-green-50 shadow-md h-auto">
                <img src={ManPlanting} alt="Man picking plants in a garden." className="rounded-t-2xl object-cover"></img>
                <div className="mx-1 px-2 pb-2 w-full h-full">
                    <h1 className="font-bold pt-3">Lorem, ipsum.</h1>
                    <h2 className="py-3 font-thin text-3xl">Lorem ipsum dolor sit.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.</p>
                    <div className="grid lg:grid-cols-2 lg:pb-3 pt-3 items-center">
                        <Button text="Apply Now" />
                        <a href="" className="underline mx-auto">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}