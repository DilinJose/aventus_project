import { instance } from "./instance";

export const getData = (url) =>instance.get(url);
export const postData = (url,data) =>instance.post(url,data);
// const editData = (url,data) =>instance.put(url);
// const deleteData = (url) =>instance.delete(url);