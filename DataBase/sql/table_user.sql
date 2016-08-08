use movingcash;

Create Table if not exists User(
    id          INTEGER,
    name        VARCHAR(30),
    lastname    VARCHAR(30),
    document    INTEGER,
    typeDoc     INTEGER,
    email       VARCHAR(30)
);
