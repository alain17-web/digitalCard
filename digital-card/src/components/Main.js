import email from "../image/envelope-solid.svg"
import linkedin from "../image/linkedin-in-brands.svg"

function Main() {
    return (
        <div>
            <h1 className="name">Alain Roos</h1>
            <p className="title">Frontend Developper</p>
            <p className="website">alainroos.website</p>
            <div className="buttons">
                <button className="email"><img src={email} alt="logo of email" />
                    Email</button>
                <button className="linkedin"><img src={linkedin} alt="logo of linkedin" /> Linkedin</button>
            </div>
            <div>
                <div className="about">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem minima eum porro doloremque</p>
                </div>
                <div className="interest">
                    <h3>Interest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

    )
}

export default Main