CREATE TABLE user_authority (
  id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'primary',
  name VARCHAR(255) NOT NULL COMMENT 'authority name',
  power SMALLINT NOT NULL DEFAULT 1 COMMENT 'authority power',
  sort TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'authority sort'
) DEFAULT CHARACTER SET = utf8 ENGINE = InnoDB COMMENT 'Picture Collection User Authority Table';

DROP TABLE IF EXISTS user_authority;

SHOW FULL COLUMNS FROM user_authority;

TRUNCATE TABLE user_authority;

INSERT INTO
  user_authority(id, name, power)
VALUES
  (9, '{"zh-Hans":"归藏","en":"Chaos"}', 999);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"知命","en":"Themis"}', 900);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"化境","en":"Hades"}', 800);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"登峰","en":"Eunomia"}', 500);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"喽啰","en":"Nuked"}', 0);

INSERT INTO
  user_authority(name)
VALUES
  ('{"zh-Hans":"胠箧","en":"Apprentice"}');

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"骈拇","en":"Footman"}', 2);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"达生","en":"Ranger"}', 3);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"在宥","en":"Rider"}', 4);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"至乐","en":"Saint"}', 5);

INSERT INTO
  user_authority(name, power)
VALUES
  ('{"zh-Hans":"山木","en":"Primate"}', 5);
