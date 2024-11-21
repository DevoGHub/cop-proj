import connectivity from '../../assets/images/connectivity.webp'
import Storage from '../../assets/images/digital_storage.webp'
import logoJPG from '../../assets/images/logo.jpg'

export const Home = () => (
    <div className="home">
        <div className="home-title">DIVYA - A REVOLUTION</div>
        <div className="home-subtitle">A step towards a more sustainable & efficient future.</div>
        <div className="img-2">
            <img src={logoJPG} alt="" style={{ borderRadius: '100%', border: 'solid 5px var(--white)' }} />
            <div className="home-para">
                <div>
                    Divya- an app designed to address the issues by digitalizing id's & medical records. The app securely stores the information, with certain advancements provided to the user.
                </div>
                <div>
                    Networking becomes effortless. Attendees at events can simply scan a band to access each other's information, fostering meaningful connections. This technology eliminates the need for traditional business cards, making it a sustainable choice for modern professionals.
                </div>
                <div>
                    Revolutionizing Identification & healthcare with a QR-Code —based app.
                </div>
            </div>
        </div>
        <div className='home-subtitle'>
            <div style={{ border: "solid 5px var(--white)", display: 'inline-block', padding: '10px 15px' }}>
                Divya provides one with:-
            </div>
        </div>
        <div className='img-2'>
            <div className='home-para'>
                <div>
                    1. Digitial Storage
                </div>
                <div>
                    2. QR code access
                </div>
                <div>
                    3. User friendly interface
                </div>
                <div>
                    4. Management of personal information
                </div>
                <div>
                    5. Management of healthcare identification
                </div>
            </div>
            <div>
                <img src={Storage} alt="" style={{ objectFit: 'contain', border: 'solid 5px var(--white)', display: 'inline-block' }} />
            </div>
        </div>
        <div className='home-subtitle'>
            <div style={{ border: "solid 5px var(--white)", display: 'inline-block', padding: '10px 15px' }}>
                Global Connectivity
            </div>
        </div>
        <div className='home-para'>
            Unleashed The QR Code Band promotes global connectivity by enabling users to share information across borders. Whether at a conference, festival, or in daily interactions, it breaks language barriers and fosters cross-cultural communication, making the world feel more interconnected than ever.
        </div>
        <div>
            <img src={connectivity} alt="" style={{ objectFit: 'contain', border: 'solid 5px var(--white)', display: 'inline-block' }} />
        </div>
    </div>
)