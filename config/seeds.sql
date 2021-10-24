INSERT INTO `employeetracker`.`employees` (
    `id`, `first_name`, `last_name`, `job_id`, `manager_id`
) VALUES (
    '1', 'John', 'Doe', '3', NULL
);
INSERT INTO `employeetracker`.`employees` (
    `id`, `first_name`, `last_name`, `job_id`, `manager_id`
) VALUES (
    '2', 'Joe', 'Johnson', '4', '1'
);
INSERT INTO `employeetracker`.`employees` (
    `id`, `first_name`, `last_name`, `job_id`, `manager_id`
) VALUES (
    '3', 'Samantha', 'Jackson', '2', '1'
);
INSERT INTO `employeetracker`.`employees` (
    `id`, `first_name`, `last_name`, `job_id`, `manager_id`
) VALUES (
    '4', 'Mike', 'Smith', '1', '1'
);



INSERT INTO `employeetracker`.`departments` (
    `id`, `name`
) VALUES (
    '1', 'HR'
);
INSERT INTO `employeetracker`.`departments` (
    `id`, `name`
) VALUES (
    '2', 'Tech'
);
INSERT INTO `employeetracker`.`departments` (
    `id`, `name`
) VALUES (
    '3', 'Research'
);
INSERT INTO `employeetracker`.`departments` (
    `id`, `name`
) VALUES (
    '4', 'Supervision'
);



INSERT INTO `employeetracker`.`jobs` (
    `id`, `title`, `salary`, `department_id`
) VALUES (
    '1', 'Customer Service', '50000', '1'
);
INSERT INTO `employeetracker`.`jobs` (
    `id`, `title`, `salary`, `department_id`
) VALUES (
    '2', 'Scientist', '80000', '3'
);
INSERT INTO `employeetracker`.`jobs` (
    `id`, `title`, `salary`, `department_id`
) VALUES (
    '3', 'Tech Support', '70000', '2'
);
INSERT INTO `employeetracker`.`jobs` (
    `id`, `title`, `salary`, `department_id`
) VALUES (
    '4', 'Intern', '65000', '1'
);
