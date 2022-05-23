import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.openbrewerydb.org/breweries`);
    console.log(data);
    setContent(data);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  const handleDetail = (item) => {
    navigate(`/detail/${item.id}`, { state: item });
  };
  return (
    <div
      style={{ marginTop: "30px", marginBottom: "60px" }}
      className="text-center"
    >
      <h2 className=" home-page-title">Welcome to Brewery List</h2>
      <div className="container">
        <div className="subContainer">
          {content.map((item) => {
            return (
              <>
                <div className="item" key={item.id}>
                  <p className="title">{item.name}</p>
                  <div
                    className="viewParent"
                    onClick={() => handleDetail(item)}
                  >
                    <p className="viewDetail">View Detail</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Link to="/">
        <button className="primary-button">Log out</button>
      </Link>
    </div>
  );
}
