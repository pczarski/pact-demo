import React from "react";
// import {Pact} from "@pact-foundation/pact";
// import {pactWith} from "jest-pact";
// import path from "path";
// import {eachLike} from "@pact-foundation/pact/src/dsl/matchers";
// import {fetchTodo} from "../services/TodoClient";
//
// const provider = new Pact({
//     port: 8099,
//     log: path.resolve(process.cwd(), "logs", "pact.log"),
//     dir: path.resolve(process.cwd(), "pacts"),
//     consumer: "pact-client",
//     provider: "todoservie"
// });
//
// describe('pact test',  () => {
//     provider.setup().then(() => {
//         describe('test test',  () => {
//             beforeEach( () => {
//                 return provider.addInteraction({
//                     state: 'empty todo',
//                     uponReceiving: 'a request for todo',
//                     withRequest: {
//                         path: '/todo',
//                         method: 'GET',
//                     },
//                     willRespondWith: {
//                         body: eachLike({
//                             id: 1,
//                             items: eachLike({
//                                 name: 'burger',
//                             }),
//                         }),
//                         status: 200,
//                         headers: {
//                             'Content-Type': 'application/json; charset=utf-8',
//                         },
//                     },
//                 })
//             })
//
//             it("will receive an empty todo list", async () => {
//                 return expect(await fetchTodo()).toReturn()
//             })
//         })
//     })
//
// })

// const { pactWith } = require("jest-pact")
// const { Matchers } = require("@pact-foundation/pact")
//
// const { getMeDogs, getMeCats } = require("../index")
//
// pactWith(
//     { consumer: "Jest Consumer Example", provider: "Jest Provider Example" },
//     provider => {
//         describe("Dogs API", () => {
//             const DOGS_DATA = [
//                 {
//                     dog: 1,
//                 },
//             ]
//
//             const dogsSuccessResponse = {
//                 status: 200,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: DOGS_DATA,
//             }
//
//             const dogsListRequest = {
//                 uponReceiving: "a request for dogs",
//                 withRequest: {
//                     method: "GET",
//                     path: "/dogs",
//                     headers: {
//                         Accept: "application/json",
//                     },
//                 },
//             }
//
//             beforeEach(() => {
//                 const interaction = {
//                     state: "i have a list of dogs",
//                     ...dogsListRequest,
//                     willRespondWith: dogsSuccessResponse,
//                 }
//                 return provider.addInteraction(interaction)
//             })
//
//             // add expectations
//             it("returns a successful body", () => {
//                 return getMeDogs({
//                     url: provider.mockService.baseUrl,
//                 }).then(dogs => {
//                     expect(dogs).toEqual(DOGS_DATA)
//                 })
//             })
//         })
//
//         describe("Cats API", () => {
//             const CATS_DATA = [{ cat: 2 }, { cat: 3 }]
//
//             const catsSuccessResponse = {
//                 status: 200,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: CATS_DATA,
//             }
//
//             const catsListRequest = {
//                 uponReceiving: "a request for cats with given catId",
//                 withRequest: {
//                     method: "GET",
//                     path: "/cats",
//                     query: {
//                         "catId[]": Matchers.eachLike("1"),
//                     },
//                     headers: {
//                         Accept: "application/json",
//                     },
//                 },
//             }
//
//             beforeEach(() => {
//                 return provider.addInteraction({
//                     state: "i have a list of cats",
//                     ...catsListRequest,
//                     willRespondWith: catsSuccessResponse,
//                 })
//             })
//
//             it("returns a successful body", () => {
//                 return getMeCats({
//                     url: provider.mockService.baseUrl,
//                 }).then(cats => {
//                     expect(cats).toEqual(CATS_DATA)
//                 })
//             })
//         })
//     }
// )




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