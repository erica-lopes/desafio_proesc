-- ACESSANDO TODO O CONTEÚDO DAS TABELAS --

SELECT * FROM products p 

SELECT * FROM categories c 

-- EFETUANDO CONSULTA SOBRE QUANTOS PRODUTOS CONTÉM CADA CATEGORIA --

SELECT count(category_id) FROM products p WHERE category_id = 1

SELECT count(category_id) FROM products p WHERE category_id = 2

-- EFETUANDO CONSULTA A MÉDIA DE PREÇOS DE CADA CATEGORIA --

SELECT avg(price) FROM products p  WHERE category_id = 1

SELECT avg(price) FROM products p  WHERE category_id = 2

-- ATUALIZANDO A CATEGORIA DE PRODUTOS --

UPDATE products SET category_id = 1 WHERE  category_id = 2;