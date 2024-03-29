import actions from "./actions";
import model from "../Model/model";

const dispatch = (intent: Intent): void =>
  actions[intent.type](model.present, intent);

export default dispatch;
