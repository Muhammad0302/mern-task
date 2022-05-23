import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
const Detail = () => {
  const location = useLocation();
  const [item, setItem] = useState(location.state);
  console.log(item);
  return (
    <div
      style={{ marginTop: "30px", marginBottom: "60px" }}
      className="text-center"
    >
      <h2 className="home-page-title">Detail of the {item.name}</h2>
      <div className="container1">
        <div className="subContainer1">
          <>
            <div className="item1" key={item.id}>
              <p className="title"></p>
              <div className="tableHeader">
                <table>
                  <tr className="tableBorder">
                    <td className="tableBorder">Id</td>
                    <td className="tableBorder">{item.id}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">Brewery type</td>
                    <td className="tableBorder">{item.brewery_type}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">city</td>
                    <td className="tableBorder">{item.city}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">country</td>
                    <td className="tableBorder">{item.country}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">country_province</td>
                    <td className="tableBorder">{item.country_province}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">created_at</td>
                    <td className="tableBorder">{item.created_at}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">latitude</td>
                    <td className="tableBorder">{item.latitude}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">longitude</td>
                    <td className="tableBorder">{item.longitude}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">phone</td>
                    <td className="tableBorder">{item.phone}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">postal_code</td>
                    <td className="tableBorder">{item.postal_code}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">state</td>
                    <td className="tableBorder">{item.state}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">street</td>
                    <td className="tableBorder">{item.street}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">updated_at</td>
                    <td className="tableBorder">{item.updated_at}</td>
                  </tr>
                  <tr className="tableBorder">
                    <td className="tableBorder">website_url</td>
                    <td className="tableBorder">{item.website_url}</td>
                  </tr>
                </table>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Detail;
