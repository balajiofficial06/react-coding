const graph = {
    1: [2, 3],
    2: [4],
    3: [5],
    4: [6],
    5: [6],
    6: []
}

function dfs(i, graph, visited) {

    visited[i] = 1
    console.log(i)

    for (j of graph[i]) {
        if (visited[j] === 1) {
            return
        }
        dfs(j, graph, visited)
    }

}

let visited = new Array(100)


function bfs(graph, visited, node) {

    let q = [node]

    while (q.length !== 0) {
        let curNode = q.shift()
        visited[curNode] = 1
        console.log(curNode)

        for (i of graph[curNode]) {
            if (visited[i] !== 1) {
                q.push(i)
            }
        }
    }


}
// console.log(visited[1] === undefined)
// dfs(1, graph, visited)
bfs(graph, visited, 1)