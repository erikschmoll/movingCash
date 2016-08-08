
use movingcash;

Create Table if not exists Solicitude(
    id              INTEGER,
    interest_rate   DECIMAL(5,2),
    amount          DECIMAL(10,2),
    way_to_pay      INTEGER,
    description     VARCHAR(300),
    created         DATE,
    updated         DATE,
    createby        INTEGER
);
