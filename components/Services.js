import Image from "next/image";
import icon1 from "../public/images/icon1.png";
import icon2 from "../public/images/icon2.png";
import icon3 from "../public/images/icon3.png";

export default function Services() {
  return (
    <div id="services">
      <div className="s-headeing">
        <h1>Servicess</h1>
        <p>Here are Some Services We Provide</p>
      </div>
      <div className="b-container">
        <div className="s-box">
          <div className="s-b-img">
            <Image src={icon1} width={460} height={250} />
          </div>
          <div className="s-b-text">
            <h2>Product Analysis</h2>
            <p>Nextjs ve React a Övgüler part3</p>
            <a href="#" className="header-btn">
              View
            </a>
          </div>
        </div>
        <div className="s-box">
          <div className="s-b-img">
            <Image src={icon2} width={460} height={250} />
          </div>
          <div className="s-b-text">
            <h2>Product Analysis</h2>
            <p>Nextjs ve React a Övgüler part3</p>
            <a href="#" className="header-btn">
              View
            </a>
          </div>
        </div>
        <div className="s-box">
          <div className="s-b-img">
            <Image src={icon3} width={460} height={250} />
          </div>
          <div className="s-b-text">
            <h2>Product Analysis</h2>
            <p>Nextjs ve React a Övgüler part3</p>
            <a href="#" className="header-btn">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
