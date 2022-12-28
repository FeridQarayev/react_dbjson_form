import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import toast, { Toaster } from "react-hot-toast";
import Helmet from "react-helmet";

function Detail() {
  const [detail, setDetail] = useState();
  let id = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:3000/users/${id.id}`).then((res) =>
      setDetail(res.data)
    );
  }, []);

  function deleteCard(idd) {
    axios
      .delete(`http://localhost:3000/users/${idd}`)
      .then(()=>console.log("deleted"));
      toast.error("Deleted")
      navigate(`/`);
  }

  return (
    <div className="form">
      <Helmet>
        <title>{detail?.subject}</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="detail">
        <h1>Name: {detail?.subject}</h1>
        <h3>Description: {detail?.description}</h3>
        <h3>Category: {detail?.category}</h3>
        <button
          onClick={() => {
            deleteCard(detail.id);
          }}
          className="DeleteBtn"
        >
          Delete
        </button>
      <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default Detail;
