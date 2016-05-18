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
    checkin_id bigint primary key AUTO_INCREMENT,
    user_id bigint not null,
    portal_id bigint not null,
    created_at TIMESTAMP not null,
    updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

DROP TABLE IF EXISTS portals;
create table portals(
  portal_id bigint primary key AUTO_INCREMENT,
  location_id VARCHAR(255) not null,
  hp integer default 100 not null,
  nickname VARCHAR(255),
  owner_id bigint,
  created_at TIMESTAMP not null,
  updated_at TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

