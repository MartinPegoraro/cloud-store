import { apiStock, apiProduct, apiSize } from "./base";

export const productApi = {
    getAllSize: async () => {
        try {
            const response = await apiProduct.get('listSize')
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    getAllProduct: async () => {
        try {
            const response = await apiProduct.get('list')
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    getOneProduct: async (id) => {
        try {
            const response = await apiProduct.get(`list/${id}`)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    createOneProduct: async (data) => {
        try {
            const response = await apiProduct.post('addProduct', data)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    createOneSize: async (data) => {
        try {
            const response = await apiProduct.post('addProduct/addSize', data)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    editOneProduct: async (data, id) => {
        try {
            const response = await apiProduct.patch(`editProduct/${id}`, data)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    editOneStock: async (data, id) => {
        try {
            const response = await apiProduct.patch(`editStock/${id}`, data)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    editOneSize: async (data, id) => {
        try {
            const response = await apiProduct.patch(`editSize/${id}`)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    deleteProduct: async (data, id) => {
        try {
            const response = await apiProduct.delete(`deleteProduct/${id}`)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
    deleteSize: async (data, id) => {
        try {
            const response = await apiProduct.delete(`deleteSize/${id}`)
            return response
        } catch (error) {
            console.log(error.response);
        }
    },
}