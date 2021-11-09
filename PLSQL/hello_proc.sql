CREATE OR REPLACE PROCEDURE hello_world
AS
BEGIN
    dbms_output.put_line('Hello World..!');
END;
/

CREATE OR REPLACE PROCEDURE add_student(rollno IN number, name in VARCHAR2)
IS
BEGIN
    INSERT INTO students values(rollno,name)
END;
/

-- EXEC procedure_name;
-- EXEC procedure_name();
-- EXEC procedure_name(param1, param2.....);

-- DROP PROCEDURE
-- DROP PROCEDURE procedure_name;