import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="main">
      <Navbar />
      <div className="header-details">
        <p>Offer is Going On Till Friday, $1.99/ma.</p>
        <h1>
          Build <span>NextJs</span>Website
        </h1>
        <p className="details">NextJs e Övgüler diziyoruz :D</p>
        <a href="#" className="header-btn">
          Buy Now
        </a>
      </div>
    </div>
  );
}
