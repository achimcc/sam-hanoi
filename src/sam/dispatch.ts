import actions from "./actions";
import model from "./model";

const dispatch = (data: DispatchData) =>
  actions[data.type](model.present, data as any);

export default dispatch;
