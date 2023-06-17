import React from "react";
import "./books.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, ListItem } from "@mui/material";
import Corousel1 from "../../../Assets/1stCorousel.jpg";
import Corousel2 from "../../../Assets/2ndCorousel.jpg";
import Corousel3 from "../../../Assets/3rdCorousel.jpg";
import Corousel4 from "../../../Assets/4thCorousel.jpg";

const Books = () => {
  var items = [
    {
      name: "Random Name #1",
      image: Corousel1,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      image: Corousel2,
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      image: Corousel3,
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      image: Corousel4,
      description: "Hello World!",
    },
  ];

  function Item(props) {
    return (
      <Paper>
        <img className="corousel-class" src={props.item.image} alt="" />
      </Paper>
    );
  }

  return (
    <>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default Books;
