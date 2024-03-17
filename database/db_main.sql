CREATE TABLE member
(
    user_uid      INT             NOT NULL, 
    user_nick     VARCHAR(20)     NOT NULL, 
    user_name     VARCHAR(20)     NOT NULL, 
    user_id       VARCHAR(12)     NOT NULL, 
    user_pwd      VARCHAR2(16)    NULL, 
    user_tel      VARCHAR2(15)    NULL, 
    user_email    VARCHAR2(30)    NULL, 
    user_mbti     VARCHAR2(10)    NULL, 
    user_sns      VARCHAR2(20)    NULL, 
     PRIMARY KEY (user_uid)
);


CREATE SEQUENCE member_SEQ
START WITH 1
INCREMENT BY 1;


CREATE TABLE sns_merber
(
    user_uid     INT             NOT NULL, 
    user_sns     VARCHAR(20)     NULL, 
    user_mbti    VARCHAR2(10)    NULL, 
     PRIMARY KEY (user_uid)
);

CREATE SEQUENCE sns_merber_SEQ
START WITH 1
INCREMENT BY 1;


CREATE TABLE non_member
(
    user_uid     INT            NOT NULL, 
    user_mbti    VARCHAR(10)    NULL, 
     PRIMARY KEY (user_uid)
);

CREATE SEQUENCE non_member_SEQ
START WITH 1
INCREMENT BY 1;



CREATE TABLE member_acount
(
    user_uid       INT            NOT NULL, 
    user_acount    VARCHAR(30)    NULL, 
     PRIMARY KEY (user_uid)
);

CREATE SEQUENCE member_acount_SEQ
START WITH 1
INCREMENT BY 1;


