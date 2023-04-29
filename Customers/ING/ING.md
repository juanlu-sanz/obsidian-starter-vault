---
customer: ING
tags:
- customer
---
# ING

## Projects
```dataview
TABLE FROM #customer/project 
WHERE customer = "ING"
AND contains(file.folder, this.file.folder)
SORT date desc
```

## Peoples
```dataview
TABLE WITHOUT ID
file.link as Name,
role as Role, 
project as Project
FROM #person 
WHERE customer = "ING"
```

## Recently completed
```dataview
TASK FROM #meeting
WHERE completed 
AND file.mtime >= date(today) - dur(7 day)
AND customer = "ING"
SORT date Desc
```

## Backlog
```dataview
TASK FROM #meeting
WHERE completed=false
AND customer = "ING"
SORT date desc
```
