import Img1 from '../../assets/images/home-img-1.jpg'
import Img2 from '../../assets/images/home-img-2.jpg'
import Img3 from '../../assets/images/home-img-3.png'
import Img4 from '../../assets/images/home-img-4.png'
import logo from '../../assets/images/logo.png'

export const Home = () => (
    <div className="home">
        <div className="home-title">DIVYA - A REVOLUTION</div>
        <div className="home-subtitle">A step towards a more sustainable & efficient future.</div>
        <div className="home-para">
            Networking becomes effortless. Attendees at events can simply scan a band to access each other's information, fostering meaningful connections. This technology eliminates the need for traditional business cards, making it a sustainable choice for modern professionals.
        </div>
        <div className="home-para">
            Revolutionizing Identification & healthcare with a QR-Code —based app.
        </div>
        <div className="img-2">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
        </div>
        <div className="img-2" style={{ marginTop: 30 }}>
            <div className='home-para'>
                Multiple files stored at hospitals & identification cards contain a fair amount of multi-layered plastic, which contribute in environmental degradation.
            </div>
            <img src={Img3} alt="" />
        </div>
        <div className='img-2'>
            <img src={logo} alt="" />
            <div className='home-para'>
                Divya- an app designed to address the issues by digitalizing id's & medical records. The app securely stores the information, with certain advancements provided to the user.
            </div>
        </div>
        <div className='home-para'>
            Each user is provided a unique QR-Code, which can be scanned to instantly access the medical history & ID of a person, facilitating in faster & more accurate treatment
        </div>
        <div className='home-subtitle'>
            Global Connectivity
        </div>
        <div className='img-2'>
            <div classname='home-para'>
                Unleashed The QR Code Band promotes global connectivity by enabling users to share information across borders. Whether at a conference, festival, or in daily interactions, it breaks language barriers and fosters cross-cultural communication, making the world feel more interconnected than ever.
            </div>
            <img src={Img4} alt="" />
        </div>
    </div>
)