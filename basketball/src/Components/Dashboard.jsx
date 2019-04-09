import React from "react";
import { Button, ButtonGroup } from "reactstrap";

export default ({ foulHandler, hitHandler, strikeHandler, ballHandler}) => {
  return (
    <ButtonGroup>
      <Button onClick={ballHandler}>
        Ball
      </Button>
      <Button onClick={strikeHandler}>
        Strike
      </Button>
      <Button onClick={foulHandler}>
        Foul
      </Button>
      <Button onClick={hitHandler}>
        Hit
      </Button>
    </ButtonGroup>
  );
};
