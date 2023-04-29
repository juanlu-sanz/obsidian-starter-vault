---
<%* 
	let customerName = await tp.system.prompt("Please enter customer name");
	let folderName = "Customers/" + customerName;
	if (!this.app.vault.getAbstractFileByPath(folderName)) {
		await this.app.vault.createFolder(folderName);
	}
	await tp.file.move(folderName+ "/" + customerName);
-%>
customer: <% customerName %>
tags:
- customer
---
# <% customerName %>

## Projects
```dataview
TABLE FROM #customer/project 
WHERE customer = "<% customerName %>"
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
WHERE customer = "<% customerName %>"
```

## Recently completed
```dataview
TASK FROM #meeting
WHERE completed 
AND file.mtime >= date(today) - dur(7 day)
AND customer = "<% customerName %>"
SORT date Desc
```

## Backlog
```dataview
TASK FROM #meeting
WHERE completed=false
AND customer = "<% customerName %>"
SORT date desc
```
