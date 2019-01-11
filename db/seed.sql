CREATE TABLE simusers
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER,
    FOREIGN KEY (id) REFERENCES simusers(id)
);

