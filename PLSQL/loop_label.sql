DECLARE
    i number(1);
    j number(1);
BEGIN 
    << outer_loop >>
    FOR i IN 1..5 LOOP 
        << inner_loop >>
        FOR j IN 1..5 LOOP
            dbms_output.put_line('i is: ' || i || ' and j is: ' || j);
        END LOOP inner_loop;
    END LOOP outer_loop;
END;