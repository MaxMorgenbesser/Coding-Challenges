


function alternate(s) {
    // Write your code here
    let map = {}
    for (let i =0; i<s.length; i ++){
        if (map[s[i]]){
            map[s[i]].push(1)
        } else {
            map[s[i]] = [1]
        }
    }
let keys = Object.keys(map)
keys.map(key => 
{ if ((map[key].length ) %2 !==0){
    delete map[key]
}})

return map
}


console.log(alternate('beabeefeab'))