const getUser = (req, res) => {
    let fake_id = 222

    if (req.params.id == fake_id) {
        res.status(200).send(req.body)
    } else {
        res.status(500).send({ message: "Error of getting user" })
    }
}

const postUser = (req, res) => {
    res.status(200).send(req.body)
}

const putUser = (req, res) => {
    let fake_id = 111

    if (req.params.id == fake_id) {
        res.status(202).send(req.body)
    } else {
        res.status(500).send({ message: "error" })
    }
}

const deleteUser = (req, res) => {
    let fake_id = 222

    if (req.params.id == fake_id) {
        res.status(204).send()
    } else {
        res.status(500).send({ message: "Error of deleting user" })
    }
}

export { getUser, postUser, putUser, deleteUser }