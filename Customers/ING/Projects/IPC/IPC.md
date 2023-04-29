---
customer: ING
project: IPC
tags:
- customer/project
---
# IPC
## Description

## Meetings
```dataview
TABLE FROM #meeting 
WHERE customer = "ING"
AND project = "IPC"
SORT date desc
```

## Peoples
```dataview
TABLE WITHOUT ID
file.link as Name,
role as Role
FROM #person 
WHERE customer = "ING"
AND contains(project, "IPC")
```
