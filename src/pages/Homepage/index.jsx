import LearnMoreContainer from "../../components/Containers/LearnMore/WithoutImage"
import LearnMoreContainerWithImage from "../../components/Containers/LearnMore/WithImage"
import ArticleContainer from "../../components/Containers/Articles"
import QRCodeContainer from "../../components/Containers/QRCode"


export default function Homepage() {
    return (
        <>
            <section className='grid md:grid-cols-2 gap-5 m-4'>
                <div className='grid gap-5'>
                    <LearnMoreContainer />
                    <LearnMoreContainer />
                </div>
                <div className=''>
                    <LearnMoreContainerWithImage />
                </div>
            </section>
            <section className='m-4 grid md:grid-cols-3 gap-5'>
                <ArticleContainer text="text1" />
                <ArticleContainer text="text2" />
                <ArticleContainer text="text3" />
            </section>
            <section className='mx-4 shadow-lg rounded-2xl'>
                <QRCodeContainer />
            </section>
        </>
    )
}