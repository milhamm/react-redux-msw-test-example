import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../store/contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetchContacts = () => {
      try {
        dispatch(fetchContacts());
      } catch (error) {}
    };
    handleFetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!contacts.length) return <p>No contacts found</p>;

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.firstName} {contact.lastName}
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
