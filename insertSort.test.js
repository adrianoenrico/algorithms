const rewire = require("rewire")
const insertSort = rewire("./insertSort")
const insert = insertSort.__get__("insert")

// @ponicode
describe("insert", () => {
    test("0", () => {
        let param1 = [1, 2, 4, 5, 6]
        insert(param1, 4, 0)
        expect(param1).toEqual([0, 1, 2, 4, 5, 6])
        expect(param1).toEqual([0, 1, 2, 4, 5, 6])
    })

    test("1", () => {
        let param1 = [1, 2, 4, 5, 6]
        insert(param1, 3, 1)
        expect(param1).toEqual([1, 1, 2, 4, 5])
        expect(param1).toEqual([1, 1, 2, 4, 5])
    })

    test("2", () => {
        let param1 = [1, 2, 4, 5, 6]
        insert(param1, 4, 6)
        expect(param1).toEqual([1, 2, 4, 5, 6, 6])
        expect(param1).toEqual([1, 2, 4, 5, 6, 6])
    })
})
