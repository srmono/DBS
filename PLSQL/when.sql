DECLARE
    num NUMBER := 1;
BEGIN
    WHILE num <= 10
    LOOP
        dbms_output.put_line(num);
        num := num +1;
    END LOOP;
END;