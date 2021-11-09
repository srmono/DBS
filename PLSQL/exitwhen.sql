DECLARE
    num number := 1;
BEGIN
    LOOP
        dbms_output.put_line(num);
        EXIT WHEN num = 10;
        num := num +1;
    END LOOP;
END;