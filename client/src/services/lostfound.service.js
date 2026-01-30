import api from "./api";

/* STUDENT */

export const reportLostItem = (data) =>
  api.post("/lost-found/lost", data);

export const reportFoundItem = (data) =>
  api.post("/lost-found/found", data);

export const getMyLostFoundItems = () =>
  api.get("/lost-found/my");

export const getAllLostFoundItems = () =>
  api.get("/lost-found");

/* ADMIN */

export const getLostFoundAdmin = () =>
  api.get("/admin/lost-found");

export const approveLostFound = (id) =>
  api.patch(`/admin/lost-found/${id}/approve`);

export const rejectLostFound = (id) =>
  api.patch(`/admin/lost-found/${id}/reject`);

export const markItemClaimed = (id) =>
  api.patch(`/admin/lost-found/${id}/mark-claimed`);
