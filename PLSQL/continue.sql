DECLARE
    num number := 0;
BEGIN
    WHILE num < 10
    LOOP
        num := num + 1;
        IF num = 5 THEN
            CONTINUE;
        END IF;
        dbms_output.put_line(num);
    END LOOP;
END;
