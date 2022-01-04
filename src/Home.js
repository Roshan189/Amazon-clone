import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2020/03/Prime-Video.png"
          alt="prime"
          className="home-image"
        />

        <div className="home-row">
          <Product
            id={12098}
            title="The Book You Wish Your Parents Had Read"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdActH06y58UxCkM_JUScrnC1qljZEU6vSkg&usqp=CAU"
            rating={5}
          />
          <Product
            id={9345}
            title="Iphone-X"
            price={99.99}
            image="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id={6767}
            title="Philips Trimmer"
            price={15.01}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq-ngMsvtiOA-DTvMvMx_6LGBtsWhQqEa9Q&usqp=CAU"
            rating={5}
          />
          <Product
            id={4389}
            title="Yellow Cotton Shirt"
            price={7.25}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS9eRIhQ_54u-jJA4djB-V6bc016jw6ol_A&usqp=CAU"
            rating={5}
          />
          <Product
            id={8167}
            title="Fair & Handsome"
            price={5.07}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXyV0nHzOAvJN-x0ZBxJLUULm0CItAoh5Qg&usqp=CAU"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id={5629}
            title="LG Smart TV"
            price={51.75}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSIL2p8J0xp41flB-XHPGMJf-PSL2WhSmuw&usqp=CAU"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
