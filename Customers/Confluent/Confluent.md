---
customer: Confluent
tags:
- customer
---
# Confluent

## Projects
```dataview
TABLE FROM #customer/project 
WHERE customer = "Confluent"
AND contains(file.folder, this.file.folder)
SORT date desc
```

## People
```dataview
TABLE WITHOUT ID
file.link as Name,
role as Role, 
project as Project
FROM #person 
WHERE customer = "Confluent"
```

## Recently completed
```dataview
TASK FROM #meeting
WHERE completed 
AND file.mtime >= date(today) - dur(7 day)
AND customer = "Confluent"
SORT date Desc
```

## Backlog
```dataview
TASK FROM #meeting
WHERE completed=false
AND customer = "Confluent"
SORT date desc
```
