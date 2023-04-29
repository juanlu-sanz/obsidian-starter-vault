---
<%* 
    let personName = await tp.system.prompt("Please enter person name")
	const customers = Object.values(Object.values(app.vault.fileMap).find(f => f.path === 'Customers').children).map(f => f.name)
	const customerName = await tp.system.suggester(customers, customers);
	let folderName = "Customers/" + customerName + "/People";
	if (!this.app.vault.getAbstractFileByPath(folderName)) {
		await this.app.vault.createFolder(folderName);
	}
	await tp.file.move(folderName+ "/" + personName);
-%>
customer: <% customerName %>
role:
project:
email:
tags: 
- person
---

# <% personName %>

## Meetings
```dataview
LIST FROM [[<% personName %>]]
SORT date DESC
```
