import axios from "axios";

const apiProduct = axios.create({ baseURL: 'http://localhost:4000/product/' })
const apiSize = axios.create({ baseURL: 'http://localhost:4000/size' })
const apiStock = axios.create({ baseURL: 'http://localhost:4000/stock' })

export { apiProduct, apiSize, apiStock };