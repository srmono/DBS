DECLARE 
    s_rollNo students.rollNo%type := 10;
    s_name students.name%type;
    s_address students.address%type;
BEGIN
    select rollNo, name, address from students WHERE rollNo = s_rollNo;
    dbms_output.put_line(s_rollNo || s_name || s_address);
    EXCEPTION
    WHEN no_data_found THEN
        dbms_output.put_line('No such student!');
    WHEN other THEN
        dbms_output.put_line('Error...!');
END;
/


DECLARE 
    s_rollNo students.rollNo%type := &ss_rollNo;
    s_name students.name%type;
    s_address students.address%type;
        -- user defined exception
    ex_invalid_rollNo EXCEPTION;
BEGIN
    IF c_id <= 0 THEN
        RAISE ex_invalid_rollNo;
    ELSE
        select rollNo, name, address from students WHERE rollNo = s_rollNo;
        dbms_output.put_line(s_rollNo || s_name || s_address);
    END IF;
    EXCEPTION
    WHEN ex_invalid_rollNo THEN
        dbms_output.put_line('roll No must be greater than Zero');
    WHEN no_data_found THEN
        dbms_output.put_line('No such student');
    WHEN other THEN
        dbms_output.put_line('Error...!');
END;
/

-- PL/SQL predefined Exceptions

-- ACCESS_INTO_NULL
-- CASE_NOT_FOUND 




