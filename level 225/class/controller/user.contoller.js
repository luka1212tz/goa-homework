let getAbout = (req, res) => {
    res.send("About page")
}

let postAbout = (req, res) => {
    res.send(req.body)
}

export { getAbout, postAbout }