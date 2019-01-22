import { FETCH_NEWS } from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_NEWS:
      const firstGroup = action.payload.slice(0, 2);
      const secondGroup = action.payload.slice(2);
      return [firstGroup, secondGroup];
    default:
      return state;
  }
}
