DROP TABLE IF EXISTS books;
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  image VARCHAR(255),
  description VARCHAR(3000) 
);

SELECT VALUES->>'title' AS title,
       VALUES->>'author' AS Category,
       VALUES->>'genre' AS Mac,
       VALUES->>'Path' AS Path,
       VALUES->>'ID' AS ID      
from   (
           select json_array_elements(replace(VALUES,'\','\\')::json) as values 
           from   temp_json
       ) a;