export const endpoint = {
  notes: "/notes",
  noteById: (id: string) => `/notes/${id}`,
  register: "/auth/register",
  login: "/auth/login",
  me : "/auth/me"
};
