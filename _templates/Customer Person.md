---
<%* 
    let personName = await tp.system.prompt("Please enter person name");
	const customerName = await tp.user.selectChildrenFromPath("Customers", tp);
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
