let jsonstr = `
[
  { "name": "luka",   "rank": 5, "active": true },
  { "name": "daviti", "rank": 3, "active": false },
  { "name": "nika",   "rank": 4, "active": true },
  { "name": "gio",    "rank": 2, "active": false },
  { "name": "andria", "rank": 1, "active": true }
]
`

let newjsonstr = JSON.parse(jsonstr)

let actives = newjsonstr.filter(act => act.active)

actives.sort((a, b) => b.rank - a.rank)

actives[0].rank = actives[0].name + " (Rank 5) active";
actives[1].rank = actives[1].name + " (Rank 4) active";
actives[2].rank = actives[2].name + " (Rank 1) active";
