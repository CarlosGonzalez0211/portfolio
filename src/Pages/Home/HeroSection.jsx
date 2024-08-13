export default function HeroSection(){
    return <section id="HeroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, we are DropDev</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">Full Stack</span>{" "}
                    <br />
                    Developer
                </h1>
                <p className="hero--section--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />Lorem ipsum dolor sit amet?      
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt=""></img>
        </div>
    </section>;
}