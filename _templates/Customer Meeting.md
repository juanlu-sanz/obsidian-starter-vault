---
<%* 
	let customerName = await tp.system.prompt("Please enter customer name");
	let projectName = await tp.system.prompt("Please enter project name");
	let meetingTopic = await tp.system.prompt("Please enter meeting topic")
	let folderName = "Customers/" + customerName + "/Projects/" + projectName + "/Meetings";
	if (!this.app.vault.getAbstractFileByPath(folderName)) {
		await this.app.vault.createFolder(folderName);
	}
	let title;
	if (meetingTopic == "Untitled") {
		title = tp.date.now("YYYY-MM-DD");
	} else {
		title = tp.date.now("YYYY-MM-DD") + "-" + meetingTopic;
	}
	await tp.file.move(folderName+ "/" + title);
	
-%>
customer: <% customerName %>
project: <% projectName %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags: 
- meeting/customer
---

# <% title %>

## Attendees
<% tp.file.cursor(1) %>

## Summary

## Action Items
#todo
