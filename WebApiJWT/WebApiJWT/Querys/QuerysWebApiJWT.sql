creare database DBPrueba

go

use DBPrueba
create table Usuario(
	IdUsuario int primary key identity(1,1),
	Nombre varchar(50),
	correo varchar (100),
	Clave varchar(100)
)

create table Producto(
	IdProducto int primary key identity(1,1),
	Nombre varchar(50),
	Marca varchar(50),
	Precio decimal(10,2)
)

select * from Usuario
select * from Producto

insert into Producto(Nombre, Marca, Precio) values ('Laptop gamer 1001', 'HP', 3500), ('Monitor Curvo HD', 'Samsung', 2000)

select NEWID()
SELECT len ('D88E14EE-0D48-4E83-9FC6-88E496F909A3')
SELECT len ('BDB559D1-7538-4EBA-9270-0C2DF0A7A107')

ALTER TABLE Usuario alter column Clave varchar(100)