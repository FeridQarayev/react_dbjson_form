import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CARD(item) {
  let data = item.item;
  let navigate = useNavigate();
  function goDetail() {
    navigate(`/detail/${data.id}`);
  }

  return (
    <Card onClick={()=>goDetail()} sx={{ minWidth: 300, height: 300, display: "flex",justifyContent:"center",alignItems:"center" ,backgroundColor:"rgb(255,94,0)",margin:10}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
        Subject: {data.subject}
        </Typography>
        {/* <br />
        <Typography sx={{ mb: 1.5,fontSize: 18 }} color="text.secondary">
        Description: {data.description}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 16 }}>
        Category: {data.category}
        </Typography> */}
      </CardContent>
    </Card>
  );
}

export default CARD;