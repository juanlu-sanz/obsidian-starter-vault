---
customer: ING
project: ICHPv2
tags:
- customer/project
---
# ICHPv2
## Description

## Meetings
```dataview
TABLE FROM #meeting 
WHERE customer = "ING"
AND project = "ICHPv2"
SORT date desc
```

## Peoples
```dataview
TABLE WITHOUT ID
file.link as Name,
role as Role
FROM #person 
WHERE customer = "ING"
AND contains(project, "ICHPv2")
```
