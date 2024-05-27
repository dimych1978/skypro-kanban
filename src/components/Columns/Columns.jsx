import AtWork from "./AtWork/AtWork";
import Testing from "./Testing/Testing";
import ToDo from "./ToDo/ToDo";
import WellDone from "./WellDone/WellDone";
import WithoutStatus from "./WithoutStatus/WithoutStatus";

const Columns = () => {
  return (
    <div className="main__content">
      <WithoutStatus />
      <ToDo />
      <AtWork />
      <Testing />
      <WellDone />
    </div>
  );
};

export default Columns;
