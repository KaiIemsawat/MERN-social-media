import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if (!token) {
            return res.status(403).send("Access Denined");
        }

        // If token start with "Bearer", cut it out
        if (token.startWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
        // from middleware, this next function is what we have to use os that the next one
        // will proceed to the next step of the function
        // For example, we are using it in 'routes/users.js' -> 'router.get("/:id", verifyToken, getUser);'
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
