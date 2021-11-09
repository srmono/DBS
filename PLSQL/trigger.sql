CREATE or REPLACE TRIGGER show_salary_diff
BEFORE DELETE OR INSERT OR UPDATE ON employees
FOR EACH ROW 
WHEN (NEW.EMP_ID > 0)
DECLARE
    sal_diff number;
BEGIN
    sal_diff := :NEW.salary - :OLD.salary;
    dbms_output.put_line('OLD Salary: ' || :OLD.salary);
    dbms_output.put_line('New Salary: ' || :NEW.salary);
    dbms_output.put_line(' Salary Differences: ' || sal_diff);
END;
/

-- Drop trigger
DROP TRIGGER show_salary_diff;