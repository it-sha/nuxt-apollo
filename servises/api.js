import axios from 'axios'

function getProducts() {
  return axios
    .get('https://reqres.in/api/products/') // эмуляция ошибки: https://reqres2.in/api/products/
    .then((r) => r.data.data)
}

export default {
  getProducts
}
