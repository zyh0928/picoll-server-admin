CREATE TABLE user (
  id VARCHAR(36) NOT NULL PRIMARY KEY COMMENT 'primary',
  account VARCHAR(20) NOT NULL UNIQUE COMMENT '/^[a-zA-Z]\w{5,15}$/',
  password VARCHAR(32) NOT NULL COMMENT '/^\S{6,20}$/',
  salt VARCHAR(36) COMMENT 'password salt, uuid v4',
  nickname VARCHAR(20) NOT NULL UNIQUE COMMENT '/^\S{2,12}$/',
  email VARCHAR(50) UNIQUE,
  phone VARCHAR(20) UNIQUE,
  token VARCHAR(36) COMMENT 'User token, uuid v4',
  created_at BIGINT UNSIGNED COMMENT 'Create time',
  login_at BIGINT UNSIGNED COMMENT 'Last login time',
  deleted_at BIGINT UNSIGNED COMMENT 'Nuked time',
  auth_id TINYINT UNSIGNED NOT NULL DEFAULT 14 COMMENT 'User authority'
) DEFAULT CHARACTER SET = utf8 ENGINE = InnoDB COMMENT 'Picture Collection User Table';

DROP TABLE IF EXISTS user;

SHOW FULL COLUMNS FROM user;

TRUNCATE TABLE user;
