create database visitantes;
use visitantes;

create table usuarios(
	id integer primary key auto_increment,
    nombre varchar(20) not null, 
    motivo varchar(100) not null, 
    hora_entrada datetime not null
);

select * from usuarios;