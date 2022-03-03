import apiFetch from "./api-fetch.js";

export async function getContacts() {
  return await apiFetch("contacts");
};

export async function createContact( newContact = { name, email, number, relation }) {
  return await apiFetch("contacts", {body: newContact });
};

export async function deleteContact(id) {
  return await apiFetch("contacts/" + id, {method: "DELETE" });
};

export async function editContact(id, newContact = { name, email, number, relation, favorite }) {
  return await apiFetch("contacts/" + id, {method: "PATCH", body: newContact});
};