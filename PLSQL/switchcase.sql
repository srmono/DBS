DECLARE
   nameChar char(1) := 'J';
BEGIN
   CASE nameChar
      when 'B' then dbms_output.put_line('Bharat');
      when 'R' then dbms_output.put_line('Richi');
      when 'S' then dbms_output.put_line('Sahdev');
      when 'V' then dbms_output.put_line('Vinod');
      when 'H' then dbms_output.put_line('Harish');
      when 'M' then dbms_output.put_line('Mahesh');
      when 'V' then dbms_output.put_line('Vivek');
      when 'A' then dbms_output.put_line('Anil');
      when 'J' then dbms_output.put_line('Jai');
      else dbms_output.put_line('No such name');
   END CASE;
END;
/