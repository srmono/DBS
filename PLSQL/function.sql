CREATE or REPLACE function getMultiple(num1 in number, num2 in number)
return number
IS
    num3 number(8);
BEGIN
    num3 := num1*num2;
    return num3;
END;
/

-- Assign to variable 
--result := getMultiple(4, 5);

-- output
-- dbms_output.put_line(getMultiple(4,5));

-- Part of Select Statement

SELECT getMultiple(4, 5) from dual;

-- Drop Function

DROP FUNCTION getMultiple;
