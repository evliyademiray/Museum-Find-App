import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/MuseumSlice";
const SearchCity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    dispatch(getData(name));
    navigate("/detail");
  };
  return (
    <div>
      <button className="Geri" onClick={() => navigate(-1)}>
        Geri
      </button>
      <form
        onSubmit={handleClick}
        className=" d-flex justify-content-center align-items-center"
      >
        <input
          type="text"
          style={{
            width: 200,
            height: 40,
            borderRadius: 20,
            paddingLeft: 15,
            fontSize: 20,
          }}
        />
        <button type="submit" className="search-button">
          Ara
        </button>
      </form>
    </div>
  );
};

export default SearchCity;
