DROP TABLE IF EXISTS locations;
create table locations(
  location_id integer primary key AUTO_INCREMENT,
  longitude varchar(255) not null,
  latitude varchar(255) not null,
  name VARCHAR(255) not null,
  UNIQUE (longitude, latitude)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS checkins;
create table checkins(
  checkin_id integer primary key AUTO_INCREMENT,
  portal_id integer not null,
  user_id integer,
  createdAt date not null,
  updatedAt date not null
) ENGINE=InnoDB;

DROP TABLE IF EXISTS portals;
create table portals(
  portal_id integer primary key AUTO_INCREMENT,
  location_id VARCHAR(255) not null,
  hp integer default 100 not null,
  nickname VARCHAR(255),
  owner_id integer,
  createdAt date not null,
  updatedAt date not null
) ENGINE=InnoDB;

