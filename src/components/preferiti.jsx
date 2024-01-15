import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Preferiti = () => {
  const preferiti = useSelector((state) => state.prefCompanies.value);
  const navigate = useNavigate();
  return (
    <>
      <h1>Le tue aziende preferite</h1>
      <button
        className="btn btn-primary "
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
      <ul>
        {preferiti.map((item) => (
          <li>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Preferiti;
