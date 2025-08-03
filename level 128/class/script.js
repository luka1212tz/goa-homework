function gimme(triplet) {
    let sorted = [...triplet].sort((a, b) => a - b);
    let middle = sorted[1];
    return triplet.indexOf(middle);
}
  




const number = bs => bs.reduce((acc, [on,off]) => acc + on - off,0)