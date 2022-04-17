
create table if not exists michelin.descriptions (
    description_id int not null auto_increment,
    restaurant_id int not null,
    description varchar(2048),
    primary key(description_id),
    FOREIGN KEY (restaurant_id) REFERENCES michelin_star(ID)
);
