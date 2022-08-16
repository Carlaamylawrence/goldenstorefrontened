import http from "../http-common";
class DataService {
getAll() {
return http.get("/products");
}
get(id) {
return http.get(`/products/${id}`);
}
create(data) {
return http.post("/products", data);
}
update(id, data) {
return http.put(`/produts/${id}`, data);
}
delete(id) {
return http.delete(`/produts/${id}`);
}
deleteAll() {
return http.delete(`/products`);
}

findByTitle(title) {
    return http.get(`/products?title=${title}`);
    }
    }
    export default new DataService();