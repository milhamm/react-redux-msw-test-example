export const LIST_CONTACTS = "LIST_CONTACTS";
export const READ_CONTACTS = "READ_CONTACTS";
export const CREATE_CONTACTS = "CREATE_CONTACTS";
export const UPDATE_CONTACTS = "UPDATE_CONTACTS";
export const DELETE_CONTACTS = "DELETE_CONTACTS";
export const RESET_CONTACTS = "RESET_CONTACTS";

const INITIAL_STATE = Object.freeze({
  contacts: [],
  inspectedContact: undefined,
});

export const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CONTACTS:
      return {
        ...state,
        contacts: action.payload.data,
      };
    case READ_CONTACTS:
      return {
        ...state,
        inspectedContact: action.payload,
      };
    case CREATE_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload.payload : contact
        ),
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
