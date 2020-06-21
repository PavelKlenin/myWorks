import {
  profileReducer,
  LOAD_PROFILE,
  SET_STATUS,
  TOGGLE_FETCHING,
  getProfile,
} from "./profileReducer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

// State
const state = {
  profile: null,
  status: null,
  isFetched: false,
};

test("Profile shouldn`t be null", () => {
  const testState = { ...state };
  const action = { type: LOAD_PROFILE, profile: { id: 1 } };
  const resultState = profileReducer(testState, action);
  expect(resultState.profile).not.toBeNull();
});
test("Status shouldn`t be null", () => {
  const testState = { ...state };
  const action = { type: SET_STATUS, status: "test" };
  const resultState = profileReducer(testState, action);
  expect(resultState.status).toBe("test");
});
test("isFetched should be TRUE", () => {
  const testState = { ...state };
  const action = { type: TOGGLE_FETCHING, isFetched: true };
  const resultState = profileReducer(testState, action);
  expect(resultState.isFetched).toBe(true);
});


/* 
const mockStore = configureMockStore([thunk]);

test("ThunkCreator getProfile returns 3 actions", () => {
  const testState = { ...state };
  const store = mockStore(testState);
  store.dispatch(getProfile(1)).then(() => {
    expect(store.getActions()[0]).not.toBeNull();
    expect(store.getActions()[1]).toEqual({
      type: TOGGLE_FETCHING,
      isFetched: true,
    });
    expect(store.getActions()[2]).not.toBeNull();
    return store.getActions()
  })
});
 */
