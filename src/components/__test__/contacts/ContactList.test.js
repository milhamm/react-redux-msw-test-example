import { render, screen } from "@testing-library/react";
import { ContactList } from "../../contacts/ContactList";
import { setupTestStore } from "../../../utils/test-utils";
import { mswServer } from "../../../mocks/server";
import { fetchContactHandlerEmpty } from "../../../mocks/handlers";

const storeRef = setupTestStore();

describe("ContactList", () => {
  it("should displays returned contacts on successful fetch", async () => {
    render(<ContactList />, { wrapper: storeRef.Wrapper });

    const displayedContacts = await screen.findAllByRole("listitem");

    expect(displayedContacts).toHaveLength(3);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Michael Johnson")).toBeInTheDocument();
  });

  it("should displays empty state contacts on empty fetch", async () => {
    mswServer.use(fetchContactHandlerEmpty);
    render(<ContactList />, { wrapper: storeRef.Wrapper });

    expect(screen.getByText(/^no contacts found$/i)).toBeInTheDocument();
  });
});
