import { setupServer } from "msw/node";
import { contactHandlers } from "./handlers";

export const mswServer = setupServer(...contactHandlers);
