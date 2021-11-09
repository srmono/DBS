DECLARE var_rows number(2);
BEGIN
    UPDATE hr.employees
    SET salary = salary + 2000;
    IF SQL%NOTFOUND THEN
        dbms_output.put_line('No record updated');
    ELSIF SQL%FOUND THEN
        dbms_output.put_line(var_rows || ' Records are updates');
    END IF;
END;
/

-- Explicit Cursor
-- 1. DECLARE the Cursor for initialization in the declare secion
-- 2. OPEN the Cursor for memory allocation in the execution section
-- 3. FETCH the Cursor for retrieving data in the execution secion
-- 4. CLOSE the Cursor to release allocated memory in the execution secion

-- Delcare Cursor
-- CURSOR cur_students IS
--     select rollno, name, address from students;

-- -- Fetch the cursor
-- FETCH cur_students INTO s_rollNo, s_name, s_address;

-- --Close cursor
-- CLOSE cur_students;

DECLARE 
    s_rollNo students.rollNo%type;
    s_name students.name%type;
    s_address students.address%type;
    CURSOR cur_students IS
        select rollNo, name, address from students;
BEGIN
    OPEN cur_students;
    LOOP 
        FETCH cur_students INTO s_rollNo, s_name, s_address;
        EXIT WHEN cur_students%NOTFOUND;
        dbms_output.put_line(s_rollNo || s_name || s_address);
    END LOOP;
    CLOSE cur_students;
END;
/
