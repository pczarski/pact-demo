import axios from "axios";

const todoEndpoint = ""
export const fetchTodo = async () => {
    return axios.get(`${todoEndpoint}/todo`)
}

// export const addItem = (item: string) => {
//     return request.get()
// }
//
// const fetchOrders = () => {
//     return request.get(`${API_ENDPOINT}/orders`).then(
//         res => {
//             return res.body.map((o) => {
//                 return new Order(o.id, o.items)
//             })
//         },
//         err => {
//             throw new Error(`Error from response: ${err.body}`)
//         }
//     )
// }
