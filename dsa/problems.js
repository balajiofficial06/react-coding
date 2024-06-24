function twoSum(arr, target) {
    let map = new Map()
    for (i of arr) {
        let remainer = target - i
        if (map.has(remainer)) {
            return [i, remainer]
        }
        map.set(i, remainer)
    }

}

// console.log(twoSum([2, 7, 11, 15], 9))

function topKElements(arr, k) {

    let map = new Map()
    for (i of arr) {
        if (map.has(i)) {
            let val = map.get(i)
            map.set(i, val + 1)
        } else {
            map.set(i, 1)
        }
    }
    let result = []

    for (val of map.entries()) {
        result.push([val[1], val[0]])
    }

    result.sort()
    console.log(result)
    for (let i = result.length; i)
}

const arr = [1, 1, 1, 2, 2, 3, 3, 3]

topKElements(arr, 2)
