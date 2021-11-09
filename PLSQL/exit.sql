DECLARE
    num number := 1;
BEGIN
    LOOP
        dbms_output.put_line(num);
        IF num = 10 THEN
            EXIT;
        END IF;
        num := num +1;
    END LOOP;
END;