DECLARE
BEGIN
    FOR var IN 1..10
    LOOP
        dbms_output.put_line(var);
    END LOOP;
END;

DECLARE
BEGIN
    FOR var IN REVERSE 1..10
    LOOP
        dbms_output.put_line(var);
    END LOOP;
END;