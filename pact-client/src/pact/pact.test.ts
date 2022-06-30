import {Pact} from "@pact-foundation/pact";
import {pactWith} from "jest-pact";
import path from "path";
import {eachLike} from "@pact-foundation/pact/src/dsl/matchers";
import {fetchTodo} from "../services/TodoClient";

const provider = new Pact({
    port: 8099,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    consumer: "pact-client",
    provider: "todoservie"
});

describe('pact test',  () => {
    provider.setup().then(() => {
        describe('test test',  () => {
            beforeEach( () => {
                return provider.addInteraction({
                    state: 'empty todo',
                    uponReceiving: 'a request for todo',
                    withRequest: {
                        path: '/todo',
                        method: 'GET',
                    },
                    willRespondWith: {
                        body: eachLike({
                            id: 1,
                            items: eachLike({
                                name: 'burger',
                            }),
                        }),
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                        },
                    },
                })
            })

            it("will receive an empty todo list", async () => {
                return expect(await fetchTodo()).toReturn()
            })
        })
    })

})



// pactWith(
//     { consumer: "Jest Consumer Example", provider: "Jest Provider Example" },
//     provider => {
//
//         describe("example", () => {
//             const DATA = [
//                 {
//                     todo: [],
//                 },
//             ]
//
//             const
//
//         })
//     }
// )