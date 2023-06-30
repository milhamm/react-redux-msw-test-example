import { api } from "../../lib/http";

const ContactService = {
  async list() {
    return api.get("/contact");
  },
  async read(id) {
    return api.get(`/contact/${id}`);
  },
  async create(payload) {
    return api.post(`/contact`, payload);
  },
  async update(id, payload) {
    return api.put(`/contact/${id}`, payload);
  },
  async delete(id) {
    return api.delete(`/contact/${id}`);
  },
};

export { ContactService };
