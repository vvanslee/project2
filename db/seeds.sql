USE kubo_db;

INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (1, 'Plumbing', 'Hot water not working...', 'Open');
INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (6, 'Emergency', 'Building is on fire!', 'Pending');
INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (4, 'Cabinet Door', 'I simply opened the cabinet door and it fell apart. Can you send someone to fix it?', 'Closed');

INSERT INTO tblProperties (PropertyName, Address, City, State, Zipcode) VALUES ('The Grand Budapest Hotel', '555 Zubrowka Rd', 'Anaheim', 'CA', '92807');
INSERT INTO tblProperties (PropertyName, Address, City, State, Zipcode) VALUES ('Roach Motel', '999 Nigh Lane', 'Miami', 'FL', '33111');
INSERT INTO tblProperties (PropertyName, Address, City, State, Zipcode) VALUES ('LSD Trailer Park', '3950 Lagoon Side Dr', 'Posey', 'IL', '62231');

INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('MrFish', 'Calvin', 'Fishoeder', 'cfishoeder@jersey.com', '$2a$08$YyiNm/Lob2u4o8sXyBYVGOVPy8k0zxV4WFUQ4C1NO3r6UUVg67lBa', 1);
INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('BBelcher', 'Bob', 'Belcher', 'bbelcher@jersey.com', '$2a$08$eu8hwrGbgST3lelCeH/f4uIlWpfDZQXPiyAhioYkJeK2T3wujACO2', 0);
INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('Teddified', 'Teddy', 'Johnson', 'teddy@sbcglobal.com', '$2a$08$XkOf7fK1BwLhk4k1K1d0MO85q/GVUN1HliNrLM0ilzfcjXJy4ci/C', 0);

INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES (1, 'Renovations will commence', '11/12/2016');
INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES (2, 'Fumigation has been delayed', '11/05/2176');
INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES (3, 'Water Shutoff will be building wide', '09/05/2017');