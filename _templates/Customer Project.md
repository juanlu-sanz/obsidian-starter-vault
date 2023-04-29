---
<%* 
	const customers = Object.values(Object.values(app.vault.fileMap).find(f => f.path === 'Customers').children).map(f => f.name)
	const customerName = await tp.system.suggester(customers, customers);
	let projectName = await tp.system.prompt("Please enter project name");
	let folderName = "Customers/" + customerName + "/Projects/" + projectName;
	if (!this.app.vault.getAbstractFileByPath(folderName)) {
		await this.app.vault.createFolder(folderName);
	}
	await tp.file.move(folderName+ "/" + projectName);
-%>
customer: <% customerName %>
project: <% projectName %>
tags:
- customer/project
---
# <% projectName %>
## Description

## Meetings
```dataview
TABLE FROM #meeting 
WHERE customer = "<% customerName %>"
AND project = "<% projectName %>"
SORT date desc
```

## Peoples
```dataview
TABLE WITHOUT ID
file.link as Name,
role as Role
FROM #person 
WHERE customer = "<% customerName %>"
AND contains(project, "<% projectName %>")
```
