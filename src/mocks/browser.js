import { setupWorker } from "msw";
import { contactHandlers } from "./handlers";

export const worker = setupWorker(...contactHandlers);
