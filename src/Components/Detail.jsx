/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const abc = {};
  const metin = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const state = useSelector((store) => store?.MuseumSlice);
  const [isOpen, setIsOpen] = useState(true);
  const xx = state?.data?.data?.data;
  console.log(xx);
  const navigate = useNavigate();
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className=" w-100">
        <button
          className="Geri"
          onClick={() => {
            navigate(-1);
          }}
        >
          Geri
        </button>
        {xx.length !== 0 && (
          <span className=" fw-bold mx-3">{xx[0]?.city} için {xx?.length} adet sonuç bulundu</span>
        )}
      </div>
      {xx?.length === 0 ? (
        <h2>Herhangi bir sonuç bulunamadı</h2>
      ) : (
        xx?.map((i, key) => (
          <div key={key} className="kapsayici">
            <div className=" fw-bold m-2">{i?.name}</div>
            <div style={isOpen ? metin : abc}>{i?.description}</div>
            <button className="azFazla" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Daha Fazla" : "Daha Az"}
            </button>
            <div>
              <span className=" fw-bold">Adres:</span> {i?.address}
            </div>
            <div>
              <span className=" fw-bold">Telefon:</span> {i?.phone}
            </div>
            <div className=" overflow-hidden">
              <span className=" fw-bold ">Web:</span> {i?.website}
            </div>
            <div>
              <span className=" fw-bold">Ziyaret Gün ve Saatleri: </span>
              {i?.workingTime}
            </div>
            <div>
              <span className=" fw-bold">Giriş Ücreti:</span> {i?.details}
            </div>
            <div>
              <span className=" fw-bold">Enlem:</span> {i?.latitude}--
              <span className=" fw-bold">Boylam:</span> {i?.longitude}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Detail;
