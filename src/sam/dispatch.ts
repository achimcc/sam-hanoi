import actions from "./actions";
import model from "./model";

const dispatch = ({ type, payload }: DispatchData) =>
  actions[type](model.present, payload as any);

export default dispatch;
