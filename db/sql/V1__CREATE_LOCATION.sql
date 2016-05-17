create table IF not EXISTS locations(
  location_id integer primary key AUTO_INCREMENT,
  longitude varchar(255) not null,
  latitude varchar(255) not null,
  name VARCHAR(255) not null,
  owner VARCHAR (255) not null,
  UNIQUE (longitude, latitude)
) ENGINE=InnoDB;

create table IF not EXISTS checkins(
  checkin_id integer primary key AUTO_INCREMENT,
  portal_id integer not null,
  user_id integer,
  createdAt date not null,
  updatedAt date not null
) ENGINE=InnoDB;

create table IF not EXISTS portals(
  portal_id integer primary key AUTO_INCREMENT,
  location_id integer not null,
  hp integer default 100 not null,
  nickname VARCHAR(255),
  owner VARCHAR (255),
  createdAt date not null,
  updatedAt date not null
) ENGINE=InnoDB;

