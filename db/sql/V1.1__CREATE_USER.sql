create table IF not EXISTS users(
  user_id bigint primary key AUTO_INCREMENT,
  username varchar(255) not null,
  signup_date timestamp not null default current_timestamp,
  is_active tinyint(1)
) ENGINE=InnoDB;
