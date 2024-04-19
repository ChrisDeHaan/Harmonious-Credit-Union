import cellphoneImage from "../../../images/looking-at-phone.jpg"
import qrImage from "../../../images/qr-code.png"

export default function QRCodeContainer () {
    return (
        <>
            <div className="grid md:grid-cols-2">
                <img src={cellphoneImage} className="max-md:rounded-t-2xl md:rounded-s-2xl object-cover w-full"></img>
                <div className="max-md:rounded-b-2xl md:rounded-e-2xl bg-indigo-50 w-full p-4 grid items-center">
                    <h1 className="text-4xl font-light">Lorem ipsum dolor sit.</h1>
                    <h2 className="font-bold text-xl">Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi quibusdam et aliquam autem aperiam harum similique ducimus quo ullam?</p>
                    <div className="grid grid-cols-[30%_70%] bg-white rounded-2xl items-center p-4 gap-2">
                        <img src={qrImage}></img>
                        <p className="text-lg">Scan this code with your phone’s camera to download Harmonious Mobile.</p>
                    </div>
                </div>
            </div>
        </>
    )
}