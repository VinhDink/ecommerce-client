import "../../style/orderManager.css";
import axios from "../../config/index";

const OrderManager = () => {
  return (
    <div class="page__box">
      <div class="page__content">
        <div class="page__title">
          <h1>Product manager</h1>
        </div>
        <div>
          <table class="table__box">
            <tr>
              <th>Id</th>
              <th>Smth</th>
              <th>Smth</th>
              <th>Status</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Smth</td>
                <td>Smth</td>
                <td>smth</td>
                <td class="table__action">
                    <button class="om__button-success">Shipped</button>
                    <button class="om__button-danger">Cancel</button>
                </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManager;
