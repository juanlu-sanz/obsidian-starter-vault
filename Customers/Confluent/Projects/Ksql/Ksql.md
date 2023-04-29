---
customer: Confluent
project: Ksql
tags:
- customer/project
---
# Ksql
## Description

## Meetings
```dataview
TABLE FROM #meeting 
WHERE customer = "Confluent"
AND project = "Ksql"
SORT date desc
```

## Peoples
```dataview
TABLE WITHOUT ID
file.link as Name,
role as Role
FROM #person 
WHERE customer = "Confluent"
AND contains(project, "Ksql")
```
