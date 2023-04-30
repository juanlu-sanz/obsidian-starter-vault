---
date: <% tp.date.now("YYYY-MM-DD") %>
tags: 
- notes/weekly
---
# <% tp.file.title %>

## Tasks
### Overdue
```dataview
TASK FROM #notes | #meeting 
WHERE completed = false
AND due < date(<% tp.date.now("YYYY-MM-DD") %>)
```
### Backlog
```dataview
TASK FROM #notes | #meeting 
WHERE completed = false
AND due > date({{sunday:gggg-MM-DD}})
```

---
## {{monday:ddd MMM D}}

### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{monday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
## {{tuesday:ddd MMM D}}

### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{tuesday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
## {{wednesday:ddd MMM D}}

### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{wednesday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
## {{thursday:ddd MMM D}}
### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{thursday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
## {{friday:ddd MMM D}}

### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{friday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
## {{saturday:ddd MMM D}}
### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{saturday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
## {{sunday:ddd MMM D}}

### Day Planning
```dataview
TASK FROM #notes | #meeting 
WHERE due = date({{sunday:gggg-MM-DD}})
```

### Action Items
#todo 

### Notes

---
