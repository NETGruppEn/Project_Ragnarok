import React from "react";
import { useHistory, useLocation } from "react-router";
import Button from "../../components/button/Button";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import RoutingPath from "../../routes/RoutingPath";
import { COLORS } from "../../shared/global/Colors";

const DetailsView = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <ViewTitle title="Details" />
      <p>{location.state?.name}</p>
      <Button
        title="Explore More Pokémon"
        onClick={() => history.push(RoutingPath.homeView)}
        color={COLORS.orange}
        onHover={COLORS.orangeHover}
      />
    </div>
  );
};

export default DetailsView;
