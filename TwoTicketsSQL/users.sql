DROP TABLE IF EXISTS users;
CREATE TABLE users
	(
	UserID		int				unique	NOT NULL,
	UUID		varchar(50)			unique	NOT NULL,
	LastName	varchar(20)				NOT NULL,
	FirstName	varchar(20)				NOT NULL,
	Height		int						NOT NULL,
	Weight		int						NOT NULL,
	Age			int						NOT NULL,
	Gender		varchar(10)				NULL,
	PRIMARY KEY (UserID)
	);

insert into users (UserID, UUID, LastName, FirstName, Height, Weight, Age, Gender) values (1,'wlkdjflsdkfjdsfic' ,'Spelwood', 'Rhianon', 56, 146, 75, 'Female');
insert into users (UserID, UUID, LastName, FirstName, Height, Weight, Age, Gender) values (2,'nwdjfbdsf' ,'Greatex', 'Carr', 53, 292, 84, 'Male');
insert into users (UserID, UUID, LastName, FirstName, Height, Weight, Age, Gender) values (3,'kdldnfwiecewc' ,'MacDonnell', 'Ronnica', 57, 114, 96, 'Female');
insert into users (UserID, UUID, LastName, FirstName, Height, Weight, Age, Gender) values (4,'dcneljnckec' ,'Arnely', 'Conan', 67, 151, 64, 'Male');
insert into users (UserID, UUID, LastName, FirstName, Height, Weight, Age, Gender) values (5,'jfndkjnv' ,'Scudder', 'Adelaida', 51, 299, 29, 'Female');
insert into users (UserID, UUID, LastName, FirstName, Height, Weight, Age, Gender) values (6,'lknrjkfnuwefwf' ,'Grimoldby', 'Liane', 76, 271, 59, 'Female');

