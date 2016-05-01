create table IF not EXISTS locations(
  location_id integer primary key AUTO_INCREMENT,
  longitude varchar(255) not null,
  latitude varchar(255) not null,
  name VARCHAR(255) not null,
  owner VARCHAR (255) not null,
  UNIQUE (longitude, latitude)
) ENGINE=InnoDB;

