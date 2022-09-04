import Image from "next/image";
import AboutImage from "../public/images/about2.png";

export default function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h3>WHAT IS CHATBOT</h3>
        <h2>
          Customer Service by our <span>Business</span>
        </h2>
        <p>NextJs e övgüler part4</p>
        <button>More Details</button>
      </div>
      <div className="about-model">
        <Image src={AboutImage} width={650} height={800} />
      </div>

      <style jsx>
        {`
          h2 span {
            color: #fec44f;
          }
        `}
      </style>
    </div>
  );
}
