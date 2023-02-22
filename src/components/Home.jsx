import React from "react";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillAmazonCircle,
  AiFillInstagram,
} from "react-icons/ai";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyHUB</h1>
          <p>Techy problems needs Techy solutions.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics nahi hai" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            itaque impedit ipsa, eaque id provident cupiditate! Unde praesentium
            labore doloremque qui amet earum asperiores quia nostrum sequi
            assumenda placeat quis ipsa, atque explicabo mollitia corporis?
            Tempora culpa sed quos. Reiciendis veritatis maiores facere.
            pariatur impedit. Commodi corrupti nisi enim. Sed eveniet placeat at
            necessitatibus magnam ab cupiditate ex, fugiat, vitae ratione
            
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
