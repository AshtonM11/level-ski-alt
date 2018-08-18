UPDATE students
SET student_name = $1, student_age = 40, skill_level = $3, desired_skill = $4, resorts = $5
WHERE fb_id = $6;