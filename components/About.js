import Image from "next/image";
import AboutImage from "../public/images/about.png";

export default function About() {
  return (
    <div id="about">
      <div className="about-model">
        <Image src={AboutImage} width={650} height={800} />
      </div>
      <div className="about-text">
        <h3>WHAT IS CHATBOT</h3>
        <h2>
          Customer Service by our <span>Chatbot</span>
        </h2>
        <p>NextJs e övgüler yine :D</p>
        <button>More Details</button>
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
