import {
  DELETE_CONTACTS,
  LIST_CONTACTS,
  READ_CONTACTS,
  UPDATE_CONTACTS,
} from "./reducer";
import { ContactService } from "./service";

const fetchContacts = () => async (dispatch) => {
  try {
    const contacts = await ContactService.list();
    dispatch({ type: LIST_CONTACTS, payload: contacts.data });
  } catch (error) {
    console.log({ error });
  }
};

const readContact = (id) => async (dispatch) => {
  try {
    const contact = await ContactService.read(id);
    dispatch({ type: READ_CONTACTS, payload: contact.data });
  } catch (error) {
    console.log({ error });
  }
};

const createContact = (payload) => async (dispatch) => {
  try {
    await ContactService.create(payload);
    dispatch({ type: UPDATE_CONTACTS, payload });
  } catch (error) {
    console.log({ error });
  }
};

const updateContact = (id, payload) => async (dispatch) => {
  try {
    await ContactService.update(id, payload);
    dispatch({
      type: UPDATE_CONTACTS,
      payload: {
        id,
        payload,
      },
    });
  } catch (error) {
    console.log({ error });
  }
};

const deleteContact = (id) => async (dispatch) => {
  try {
    await ContactService.delete(id);
    dispatch({ type: DELETE_CONTACTS, payload: id });
  } catch (error) {
    console.log({ error });
  }
};

export {
  fetchContacts,
  createContact,
  readContact,
  updateContact,
  deleteContact,
};
