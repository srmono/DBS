DECLARE
    num number :=1;
BEGIN
    << loop1 >>
    -- Wile loop execution
    WHILE num <= 10 LOOP
        dbms_output.put_line('Value of num: ' || num);
        num := num + 1;
        IF num = 5 THEN
            num := num + 1;
            GOTO loop1;
        END IF;
    END LOOP;
END;
