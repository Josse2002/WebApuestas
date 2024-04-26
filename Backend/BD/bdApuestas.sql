create database apuestas;
use apuestas;

create table Roles(
	idRol int primary key auto_increment,
    tipoRol varchar(70) not null
);

create table Usuarios(
	idUsuario int primary key auto_increment not null,
    nombreUsuario varchar(70) not null,
    apellidoUsuario varchar(70) not null,
    dui varchar(10),
    email varchar (200) not null,
	userName varchar(50) not null,
    clave varchar(32) not null,
    puntosUser int,
    idRol int not null,
    foreign key (idRol) references Roles(idRol)
);

create table EstadoApuesta(
	idEstadoApuesta int primary key auto_increment not null,
    EstadoDeApuesta varchar(50) not null -- ganada, perdida, pendiente
);


create table EquipoVisitante(
	idEquipoVisitante int primary key auto_increment not null,
    nombreEquipoVisitante varchar(50) not null,
    representanteEquipoVisitante varchar(120) not null,
    fechaFundacionVisitante date not null
);	
create table EquipoLocal(
	idEquipoLoca int primary key auto_increment not null,
    nombreEquipoLoca varchar(50),
    representanteEquipoLocal varchar(120) not null,
    fechaFundacionLocal date not null
);


create table Partido(
	idPartido int primary key auto_increment not null,
    fechaPartido date not null,
    marcadorLocal int not null,
    marcadorVisitante int not null,
    idEquipoVisitante int not null,
    idEquipoLoca int not null,
    foreign key (idEquipoVisitante) references EquipoVisitante(idEquipoVisitante),
    foreign key (idEquipoLoca) references EquipoLocal(idEquipoLoca)
);


create table Apuestas(
	idApuestas int primary key auto_increment not null,
    idUsuario int not null,
    CantidadApostada decimal (10,3) not null,
    fechaApuesta Date not null,
    idEstadoApuesta int not null,
    idPartido int not null,
    foreign key (idUsuario) references Usuarios(idUsuario),
    foreign key (idEstadoApuesta) references EstadoApuesta(idEstadoApuesta),
    foreign key (idPartido) references Partido(idPartido)
);









