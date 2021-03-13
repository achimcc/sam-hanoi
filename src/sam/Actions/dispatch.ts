import actions from "./actions";
import model from "./model";

const dispatch = (intent: Intent) =>
  actions[intent.type](model.present, intent);

export default dispatch;
