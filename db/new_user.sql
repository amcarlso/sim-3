INSERT INTO simusers
(username, password)
VALUES
(${username}, ${password})
RETURNING *;