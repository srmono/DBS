-- Create a trigger invoked before a change is made ot country_reports Table
create trigger before_country_reports_update
    before update on country_reports
    for each row
    insert into population_logs(
        country_id,
        year,
        old_population,
        new_population
    )
    values(
        old.country_id
        old.year,
        old.population,
        new.population
    );

-- Select Data from country id 100 and int he year of 2018 from country_reports table

select from country_reports where country_id = 100 and year = 2018;

-- Update the population for country id 100 in the year of 2018

update country_reports set population = 13526272903 where country_id = 100 and year = 2018;

-- Query data from the population_logs to verify

select * from population_logs;



