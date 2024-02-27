import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TurkeyMap from "turkey-map-react";
import { getData } from "../Redux/MuseumSlice";

const Map = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  return (
    <div className="harita">
      <button className="Geri" onClick={()=>navigate(-1)}>Geri</button>
      <TurkeyMap
        style={{ display: "flex" }}
        hoverable={true}
        visible={true}
        customStyle={{ idleColor: "#444", hoverColor: "salmon" }}
        showTooltip={true}
        onClick={(i)=>{
          const name=i.name
          dispatch(getData(name))
          navigate('/detail')
          }}
      />
    </div>
  );
};
export default Map;
