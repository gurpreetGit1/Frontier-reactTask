import "./App.css";
import { ProductData } from "./Data/ProductData";
import DeliveryStatus from "./components/DeliveryStatus";
import Feedback from "./components/Feedback";
import OrderDetails from "./components/OrderDetails";
import Timeline from "./components/Timeline";
import Cols from "./components/UI/Cols";
import Row from "./components/UI/Row";

function App() {
  return (
    <div className="container">
      <Row className="wrapper g-4">
        <Cols className="col-lg-6">
          <DeliveryStatus productData={ProductData} />
          <Timeline productData={ProductData} />
        </Cols>
        <Cols className="col-lg-6">
          <OrderDetails productData={ProductData} />
          <Feedback />
        </Cols>
      </Row>
    </div>
  );
}

export default App;
