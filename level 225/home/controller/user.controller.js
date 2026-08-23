let createUserController = (req, res) => {
    res.status(201).json({
        message: "User Created Successfully"
    })
}

export { createUserController }